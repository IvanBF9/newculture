const {User} = require('../models');
//crypt
const bcrypt = require('bcrypt');

const userFuncs = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    update: update
}

function findAll(){
    return User.findAll();
}

async function create(usr){

    let hash = await bcrypt.hash(usr.pw, await bcrypt.genSalt(10));

    let newUser = new User({
        username: usr.username,
        firstname: usr.firstname,
        lastname: usr.lastname,
        email: usr.email,
        pw: hash,
        level: usr.level,
    });
    
    return newUser.save();
}

function findById(id){
    return User.findByPk(id);
}

function deleteById(id){
    return User.destroy({ where : {id: id} });
}

async function update(usr, id){

    let hash = await bcrypt.hash(usr.pw, await bcrypt.genSalt(10));

    let updateUsr = {
        username: usr.username,
        firstname: usr.firstname,
        lastname: usr.lastname,
        email: usr.email,
        pw: hash,
        level: usr.level,
        admin: usr.admin
    };
    return User.update(updateUsr, { where: {id: id} });
}

module.exports = userFuncs;