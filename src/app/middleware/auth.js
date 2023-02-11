const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
        if(err) return res.status(401).send({ error: 'Token inválido'});

        req.user_id = decoded.user_id;
        next();
    });
}

module.exports = auth;