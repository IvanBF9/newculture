const express = require('express');
const helmet = require('helmet');
require('dotenv').config();
const env = process.env;
const Port = env.PORT || 8080;

const app = express();

//Light secure
app.use(helmet());
app.use(express.json());
app.disable('x-powered-by');

//Routes
const createRoutes = require('./routes');
createRoutes(app);

//Models sequelize & run server
const db = require('./models');
db.sequelize.sync().then((req) => {
    //Server On + Port
    app.listen(Port, () => {
        console.log(`Server listening on http://127.0.0.1:${Port}`);
    });
});