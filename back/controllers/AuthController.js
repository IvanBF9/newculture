const {User} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();
const secret = process.env.ACCES_TOKEN_SECRET;
//SONDAGES Possible
//Dons pour les users avec petite com

const generateAccessToken = (user) => {
    return jwt.sign(user, secret, {expiresIn : "120s"});
}

function login(req, res, next){
    const {email, pw} = req.body;
    const clearpw = pw;
    User.findAll({ where : { email : email } })
    .then((usr) => {
        let {dataValues} = usr[0];
        let {email, pw} = dataValues;
        bcrypt.compare(clearpw, pw, function(err, result) {
            if (!err){
                if (result){
                    res.status(200);
                    res.send({
                        token: generateAccessToken(dataValues)
                    });    
                }else{
                    res.status(401);
                    res.send({
                        message: "Oups il semble que votre mot de passe est invalide ! :("
                    })
                }
            }else{
                next(err);
            }
        });
    })
    .catch(err => {next(err)})
}

module.exports = {login};