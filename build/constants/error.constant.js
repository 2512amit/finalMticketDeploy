"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_MESSAGE = void 0;
const errorHandler_1 = require("./errorHandler");
exports.ERROR_MESSAGE = {
    SERVER_ERROR: new errorHandler_1.ErrorHandler(500, "Internal server error"),
    UNAUTHORIZED: new errorHandler_1.ErrorHandler(401, "Unauthorized"),
    NOT_FOUND: new errorHandler_1.ErrorHandler(404, "Not Found"),
};
//# sourceMappingURL=error.constant.js.map