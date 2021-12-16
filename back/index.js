const express = require('express');
const helmet = require('helmet');
require('dotenv').config();
const env = process.env;
const Port = env.PORT || 8080;
const {graphqlHTTP} = require("express-graphql");
const cors = require("cors");

const app = express();

//Light secure 
app.use(helmet());
app.disable('x-powered-by');

app.use(express.json({limit: '10mb'}));

//cors
const corsOptions = {
    origin: '*',
}

app.use(cors());

//Grahql
const schema = require('./schemas/public');
const protectedschema = require('./schemas/protected');
const {authToken} = require('./auth');

//Opened routes
app.use("/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

//Protected routes with JWT
app.use("/graphqlprotected", authToken,
    graphqlHTTP(async (request, response, graphQLParams) => ({
        schema : protectedschema,
        rootValue : request.headers['authorization'] && request.headers['authorization'].split(' ')[1],//Here we give the token to graphql
        graphiql: true,
    }))
);

//Models sequelize & run server
const db = require('./models');
db.sequelize.sync().then((req) => {
    app.listen(Port, () => {
        console.log('➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖');
        console.log('\x1b[36m%s\x1b[0m',`Server listening on http://127.0.0.1:${Port} 🙈`);
        console.log('➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖');
        console.log('\x1b[36m%s\x1b[0m', `🕒 ${new Date().getHours()}h${new Date().getMinutes()}`);
    });
});