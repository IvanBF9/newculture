const {Article} = require('../models');

const articleFunctions = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    update: update
}

function findAll(){
    return Article.findAll();
}

function create(){

}

function findById(){

}

function deleteById(){

}

function update(){

}

module.exports = articleFunctions;