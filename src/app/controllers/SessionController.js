const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

User.prototype.checkPassword = function (password) {
  return bcrypt.compare(password, this.password_hash);
};

const decryptPassword = function (plainPassword, hashFromDB) {
  return bcrypt.compareSync(plainPassword, hashFromDB);
};

class SessionController {
  async store(req, res) {
    try {
      const { email_address, password_hash } = req.body;

      if (!email_address || !password_hash) {
        return res.status(401).json({ message: "All the fields are required" });
      }

      const user = await User.findOne({
        where: { email_address: email_address },
      });

      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }

      if (user) {
        if (decryptPassword(password_hash, user.password_hash)) {
          const token = jwt.sign({ id: User.id }, process.env.APP_SECRET, {
            expiresIn: "24h",
          });
          return res.status(200).json({
            status: 200,
            token,
            user,
          });
        }
        return res.status(401).json({
          status: 401,
          message: "Incorrect password",
        });
      }

      return res.json({ user });
    } catch {
      return res
        .status(400)
        .send({ erro: "It was not possible to get the authorization" });
    }
  }
}

module.exports = new SessionController();
