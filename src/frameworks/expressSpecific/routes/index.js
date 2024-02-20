const express = require('express');
const testsRouter = require('./tests');

module.exports = dependencies => {
    const routes = express.Router();
    const tests = testsRouter(dependencies);

    routes.use('/tests', tests);
    
    return routes;
}