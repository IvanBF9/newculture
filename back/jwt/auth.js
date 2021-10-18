require('dotenv').config();
const secret = process.env.ACCES_TOKEN_SECRET;
const jwt = require("jsonwebtoken");
//https://github.com/codeforgeek/node-refresh-token/blob/master/app.js

//verify token function
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, secret, (err, user) => {
        console.log(err);
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    });
    
};

module.exports = {authenticateToken};