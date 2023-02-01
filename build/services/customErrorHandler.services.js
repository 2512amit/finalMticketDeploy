"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class customErrorHandler extends Error {
    constructor(status, msg) {
        super();
        this.status = status;
        this.message = msg;
    }
    static alreadyExist(message) {
        return new customErrorHandler(409, message);
    }
    static wrongCredentials(message = "email or password is invalid") {
        return new customErrorHandler(401, message);
    }
    static unAuthorized(message = "unAuthorized") {
        return new customErrorHandler(401, message);
    }
    static notFound(message = "404 not found") {
        return new customErrorHandler(404, message);
    }
    static serverError(message = "internal server error") {
        return new customErrorHandler(500, message);
    }
    static captchaNotPresnt(message = "captcha not available") {
        return new customErrorHandler(400, message);
    }
}
exports.default = customErrorHandler;
//# sourceMappingURL=customErrorHandler.services.js.map