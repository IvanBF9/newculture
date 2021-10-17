const userFuncs = require('../dao/User');

const userController = {
    addUsr: addUsr,
    findUsrs: findUsrs,
    findUsrById: findUsrById,
    updateUsr: updateUsr,
    deleteById: deleteById
}

function addUsr(req, res, next){
    let user = req.body;
    
    userFuncs.create(user)
    .then((data) => {
        res.send(data);
    })
    .catch(err => {
        next(err.errors[0].type);
    });

}

function findUsrs(req, res, next){
    userFuncs.findAll()
    .then((data) => {
        res.send(data);
    })
    .catch(err => next);
}

function findUsrById(req, res, next){
    const {id} = req.params;
    userFuncs.findById(id)
    .then((data) => {
        res.send(data);
    })
    .catch(err => next);
}

function updateUsr(req, res, next){
    userFuncs.update(req.body, req.params.id)
    .then((data) => {
        res.status(200).json({
            message: 'User updated successfully !',
            user: data
        })
    })
    .catch(err => next);
}

function deleteById(req, res, next){
    userFuncs.deleteById(req.params.id)
    .then((data) => {
        res.status(200).json({
            message: 'User successfully deleted !',
            user: data
        })
    })
    .catch(err => next);
}

module.exports = userController;