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
const register_validation_1 = require("../../validation/register.validation");
const captcha_1 = require("../../utils/captcha");
const register_repo_1 = __importDefault(require("../../repo/register.repo"));
const customErrorMessage_1 = require("../../errorMessage/customErrorMessage");
const registerControllers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = register_validation_1.registerSchema.validate(req.body);
    if (error) {
        const msg = error.details[0].message;
        return next(msg);
    }
    const { name, email, password, phone, gender, occupation, securityAnswer, securityQuestion, captcha, } = req.body;
    try {
        const exist = yield register_repo_1.default.isEmailExist(email);
        if (exist) {
            return next(customErrorMessage_1.CUSTOM_ERROR_MESSAGE.USER_ALREADY_EXIST);
        }
        const captchaexist = yield (0, captcha_1.verifyCaptcha)(captcha);
        if (!captchaexist) {
            return next(customErrorMessage_1.CUSTOM_ERROR_MESSAGE.CAPTCHA_NOT_PRESENT);
        }
        else {
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
            const user = new models_1.UserModel({
                name: name,
                email: email,
                password: hashedPassword,
                phone: phone,
                gender: gender,
                occupation: occupation,
                securityQuestion: securityQuestion,
                securityAnswer: securityAnswer,
            });
            yield user.save();
            res.send({
                message: "user created successfully",
            });
        }
    }
    catch (error) {
        return next(error);
    }
});
exports.default = registerControllers;
//# sourceMappingURL=register.controllers.js.map