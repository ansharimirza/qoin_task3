require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.API_PORT;
const routes = require('./frameworks/expressSpecific/routes');
const API_PREFIX = process.env.API_PREFIX;
const dependencies = require('./config/dependencies');
const ErrorHandler = require('./frameworks/expressSpecific/ErrorHandler');
const {connect: connectToMariaDB} = require('./frameworks/database/mariadb');

module.exports = {
    start: () => {
        //middleware 
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        //routes
        app.use(API_PREFIX, routes(dependencies));  
        //common error handlers
        app.use(ErrorHandler);


        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);

            connectToMariaDB();
        });
    }
}