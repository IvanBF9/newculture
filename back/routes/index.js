const {addUsr,findUsrs,findUsrById,updateUsr,deleteById} = require('../controllers/UserController');// User
const {login} = require('../controllers/AuthController');
const createRoutes = (app) => {

    /*<--- AUTH --->*/
    app.post('/login', login);
    /*<--- USERS --->*/
    app.post('/user/signin', addUsr);
    app.put('/user/edit/:id', updateUsr);
    app.get('/user/getall', findUsrs);
    app.get('/user/getone/:id', findUsrById);
    app.delete('/user/delete/:id', deleteById);

}

module.exports = createRoutes;