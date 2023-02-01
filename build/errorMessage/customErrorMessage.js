"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CUSTOM_ERROR_MESSAGE = void 0;
const customErrorHandler_1 = require("./customErrorHandler");
exports.CUSTOM_ERROR_MESSAGE = {
    USER_ALREADY_EXIST: new customErrorHandler_1.CustomErrorHandler(409, "This email already exist"),
    CAPTCHA_NOT_PRESENT: new customErrorHandler_1.CustomErrorHandler(409, "captcha not available"),
};
//# sourceMappingURL=customErrorMessage.js.map