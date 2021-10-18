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
        console.log('➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖');
        console.log('\x1b[36m%s\x1b[0m',`Server listening on http://127.0.0.1:${Port} 😎`);
        console.log('➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖');
        console.log('\x1b[36m%s\x1b[0m', `🕒 ${new Date().getHours()}h${new Date().getMinutes()}`);
    });
});