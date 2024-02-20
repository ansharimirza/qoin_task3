const getTestByIdController = require('./getTestById.controller');
const addTestController = require('./addTest.controller');
const updateTestController = require('./updateTest.controller');
const deleteTestController = require('./deleteTest.controller');
const getTestByPageController = require('./getTestByPage.controller');

module.exports = dependencies => {
    return {
        getTestByIdController: getTestByIdController(dependencies),
        addTestController: addTestController(dependencies),
        updateTestController: updateTestController(dependencies),
        deleteTestController: deleteTestController(dependencies),
        getTestByPageController: getTestByPageController(dependencies),
    }
}