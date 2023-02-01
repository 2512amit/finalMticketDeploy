"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const config_1 = require("../../config");
const jwt_services_1 = __importDefault(require("../../services/jwt.services"));
const customErrorHandler_services_1 = __importDefault(require("../../services/customErrorHandler.services"));
const login_validation_1 = require("../../validation/login.validation");
const captcha_1 = require("../../utils/captcha");
const customErrorMessage_1 = require("../../errorMessage/customErrorMessage");
const loginControllers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = login_validation_1.loginSchema.validate(req.body);
    if (error) {
        return next(error);
    }
    try {
        const user = yield models_1.UserModel.findOne({ email: req.body.email });
        if (!user) {
            return next(customErrorHandler_services_1.default.wrongCredentials());
        }
        const match = yield bcryptjs_1.default.compare(req.body.password, user.password);
        if (!match) {
            return next(customErrorHandler_services_1.default.wrongCredentials());
        }
        const access_token = jwt_services_1.default.sign({ _id: user._id });
        const refresh_token = jwt_services_1.default.sign({ _id: user._id }, config_1.REFRESH_SECRET_EXPIRES_IN, config_1.REFRESH_TOKEN);
        const captchaexist = yield (0, captcha_1.verifyCaptcha)(req.body.captcha);
        if (!captchaexist) {
            return next(customErrorMessage_1.CUSTOM_ERROR_MESSAGE.CAPTCHA_NOT_PRESENT);
        }
        else {
            yield models_1.RefreshToken.create({ token: refresh_token });
            res.json({
                access_token: access_token,
                refresh_token: refresh_token,
                message: "Login success",
                id: user._id,
            });
        }
    }
    catch (err) {
        return next(err);
    }
});
exports.default = loginControllers;
//# sourceMappingURL=login.controllers.js.map