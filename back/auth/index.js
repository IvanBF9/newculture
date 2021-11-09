require('dotenv').config();
const secret = process.env.ACCES_TOKEN_SECRET;
const jwt = require("jsonwebtoken");
const jwt_decode = require('jwt-decode');
const {User} = require("../models");

/*
 ▄▄▄       █    ██ ▄▄▄█████▓ ██░ ██ 
▒████▄     ██  ▓██▒▓  ██▒ ▓▒▓██░ ██▒
▒██  ▀█▄  ▓██  ▒██░▒ ▓██░ ▒░▒██▀▀██░
░██▄▄▄▄██ ▓▓█  ░██░░ ▓██▓ ░ ░▓█ ░██ 
 ▓█   ▓██▒▒▒█████▓   ▒██▒ ░ ░▓█▒░██▓
 ▒▒   ▓▒█░░▒▓▒ ▒ ▒   ▒ ░░    ▒ ░░▒░▒
  ▒   ▒▒ ░░░▒░ ░ ░     ░     ▒ ░▒░ ░
  ░   ▒    ░░░ ░ ░   ░       ░  ░░ ░
      ░  ░   ░               ░  ░  ░

Authentication part with JWT
- Token is stored on db in the user table to be revokable
*/

/*
This function returns a new token for the user
and store the token on db to revoke old tokens
*/
const generateToken = async (user) => {
    let {username, profile_picture, email, rights_level, id} = user;
    //This Token expires in 14 days
    const token = jwt.sign({
        username,
        profile_picture,
        email,
        rights_level,
        id
    }, secret, {expiresIn : "14d"});
    //Update token on db
    user.bearer = token;
    User.update(user, { where: {id: id} });
    //Send token
    return token
}
/*
This function check the token validity
    - with JWT verify
    - And check if the token is on the user table 
*/
const authToken = async (req, res, next) => {
    //Getting the tokens on the header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    //Status 401 = Unauthorised "token is undefined" 🚷
    if (token == null) return res.sendStatus(401);
    //Getting actual token of the user on db
    const usrId = jwt_decode(token).id;
    let data = await User.findByPk(usrId);
    //if user not found returns a 404
    if (data == null) return res.sendStatus(404);
    //Check if token is stored on database to avoid stoled tokens to be used
    if (data.bearer == token){
        //JWT Verify 🙅
        jwt.verify(token, secret, (err, user) => {
            if (err) return res.sendStatus(403)
            //Is ok ✅
            req.bearer = token;
            return next();
        });

    }else{
        //Status 403 = Unauthorised 🚷
        return res.sendStatus(403)
    }
};

module.exports = {generateToken, authToken};