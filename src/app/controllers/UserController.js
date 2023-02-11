const { User } = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = function (plainPassword) {
    return bcrypt.hashSync(plainPassword, saltRounds);
};

module.exports = {
  async store(req, res) {
    const { email_address, password_hash } = req.body;
    const hashedPassword = hashPassword(password_hash);
            const user = await User.create({ 
                email_address: email_address,
                password_hash: hashedPassword 
            });
             return res.json(user);
  },
};
