module.exports.Response = class Response {
    constructor({
        statusCode = null,
        statusMessage = null,
        statusDescription = null,
        result = [],
    }){
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
        this.statusDescription = statusDescription;
        this.result = result;
    }
}


module.exports.ResponseError = class ResponseError {
    constructor({
        status = null,
        message = null,
        code = null,
    }){
        this.status = status;
        this.message = message;
        this.code = code;
    }
}