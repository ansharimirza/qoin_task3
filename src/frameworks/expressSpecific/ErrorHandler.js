const {
    Response,
    ResponseError,
} = require('../common');

module.exports = (err,req,res,next) => {

    const statusCode = err.status ?? 500;
    res.status(statusCode);
    res.json(new ResponseError({
        status: err.status || 500,
        message: err.message || 'No MSG',
        code: err.code || '00',
    }));
}