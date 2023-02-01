"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const joi_1 = require("joi");
const customErrorHandler_services_1 = __importDefault(require("../services/customErrorHandler.services"));
const erroHandler = (err, req, res, next) => {
    let statusCode = 500;
    let data = Object.assign({ message: "internal server error" }, (config_1.DEBUG_MODE === "true" && { originalError: err.message }));
    if (err instanceof joi_1.ValidationError) {
        statusCode = 422;
        data = {
            message: err.message,
        };
    }
    if (err instanceof customErrorHandler_services_1.default) {
        (statusCode = err.status),
            (data = {
                message: err.message,
            });
    }
    return res.status(statusCode).json(data);
};
exports.default = erroHandler;
//# sourceMappingURL=errorHandler.js.map