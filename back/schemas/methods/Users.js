const graphql = require("graphql");
const bcrypt = require('bcrypt');
const jwt_decode = require('jwt-decode');
const {
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} = graphql;

//Sequelize models
const {User} = require('../../models');
//User model for graphql
const {UserPrivate, UserPublic} = require("../Types/UserType");
//Function to generate a jwt token to auth our users
const {generateToken} = require("../../auth");

/*
 █    ██   ██████ ▓█████  ██▀███    ██████      █████▒█    ██  ███▄    █  ▄████▄    ██████ 
 ██  ▓██▒▒██    ▒ ▓█   ▀ ▓██ ▒ ██▒▒██    ▒    ▓██   ▒ ██  ▓██▒ ██ ▀█   █ ▒██▀ ▀█  ▒██    ▒ 
▓██  ▒██░░ ▓██▄   ▒███   ▓██ ░▄█ ▒░ ▓██▄      ▒████ ░▓██  ▒██░▓██  ▀█ ██▒▒▓█    ▄ ░ ▓██▄   
▓▓█  ░██░  ▒   ██▒▒▓█  ▄ ▒██▀▀█▄    ▒   ██▒   ░▓█▒  ░▓▓█  ░██░▓██▒  ▐▌██▒▒▓▓▄ ▄██▒  ▒   ██▒
▒▒█████▓ ▒██████▒▒░▒████▒░██▓ ▒██▒▒██████▒▒   ░▒█░   ▒▒█████▓ ▒██░   ▓██░▒ ▓███▀ ░▒██████▒▒
░▒▓▒ ▒ ▒ ▒ ▒▓▒ ▒ ░░░ ▒░ ░░ ▒▓ ░▒▓░▒ ▒▓▒ ▒ ░    ▒ ░   ░▒▓▒ ▒ ▒ ░ ▒░   ▒ ▒ ░ ░▒ ▒  ░▒ ▒▓▒ ▒ ░
░░▒░ ░ ░ ░ ░▒  ░ ░ ░ ░  ░  ░▒ ░ ▒░░ ░▒  ░ ░    ░     ░░▒░ ░ ░ ░ ░░   ░ ▒░  ░  ▒   ░ ░▒  ░ ░
 ░░░ ░ ░ ░  ░  ░     ░     ░░   ░ ░  ░  ░      ░ ░    ░░░ ░ ░    ░   ░ ░ ░        ░  ░  ░  
   ░           ░     ░  ░   ░           ░               ░              ░ 
*/
/*
Publics functions
- this functions can be accessed by public root
*/

const getAllUsers = {

    type: new GraphQLList(UserPublic),
    async resolve(parent, args) {
        let user = await User.findAll();
        user.map(usr => {
            //In GraphQL 
            usr.profile_picture = usr.profile_picture.toString(); 
        });
        return user//User.findAll()
    },
}

//Get user by id
const getOneUser = {
    type: new GraphQLList(UserPublic),
    args: {
        bearer: { type: GraphQLString }, 
        id: { type: GraphQLInt }
    },
    resolve(parent, args) {
        return [User.findByPk(args.id)]
    },
}

//Get my infos
const getMyProfile = {
    type: new GraphQLList(UserPublic),
    async resolve(parent, args) {

        try{
            
            let {id} = jwt_decode(parent);
            let usr = await User.findByPk(id);
            usr.profile_picture = usr.profile_picture.toString();
            return [usr];

        }catch(e){
            console.log(e);
        }
    },
}

/*
Privates functions
- this functions can be accessed by protected root
*/

const createUser = {
    type: UserPrivate,
    args: {
        profile_picture: { type: GraphQLString },
        username: { type: GraphQLString },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
        pw: { type: GraphQLString },
        postal_code: { type: GraphQLInt },
        adress: { type: GraphQLString },
        city: { type: GraphQLString },
    },
    async resolve(parent, args) {
        //Hashing password to put in db
        args.pw = await bcrypt.hash(args.pw, await bcrypt.genSalt(10));
        //Creating user
        let newuser = new User(args);
        return newuser.save()
    },
};

const connect = {
    type: UserPrivate,
    args: {
        email: { type: GraphQLString },
        pw: { type: GraphQLString },
    },
    async resolve(parent, args) {

        let {email, pw} = args;
        console.log("AAAAAAAAA : " + email);
        let usr = await User.findOne({ where: { email: email } })
        let data = usr.dataValues;
        let clearpw = data.pw;
        let verified = await bcrypt.compare(pw, clearpw);

        if (verified) {
            const token = await generateToken(data);
            //here we assign the bearer to the user to revoke the tokens on new connection
            data.bearer = token;
            User.update(data, { where: {id: data.id} });
            //giving the token if everithing is good !
            return {
                bearer: token,
            }
        }

    },
};
//You can create a func like logout where you remove user token from db to revoke it 

module.exports = {getAllUsers, createUser, connect, getOneUser, getMyProfile};