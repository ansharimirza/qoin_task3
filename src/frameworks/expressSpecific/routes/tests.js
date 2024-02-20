const express = require('express');

const {
    testControllers
} = require('../../../controllers');

module.exports = dependencies =>{
    const router  = express.Router();

    const {
        getTestByIdController,
        addTestController,
        updateTestController,
        deleteTestController,
        getTestByPageController
    } = testControllers(dependencies);

    router.route('/').post(addTestController).put(updateTestController).get(getTestByPageController);
    router.route('/:id').get(getTestByIdController).delete(deleteTestController);

    return router;
}