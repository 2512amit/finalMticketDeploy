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
const error_constant_1 = require("../../constants/error.constant");
const register_repo_1 = __importDefault(require("../../repo/register.repo"));
const models_1 = require("../../models");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield register_repo_1.default.findUserByEmail(email);
        return result;
    }
    catch (error) {
        throw error;
    }
});
const forgotPasswordControllers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield getUserByEmail(req.body.email);
        if (!user) {
            return next(error_constant_1.ERROR_MESSAGE.NOT_FOUND);
        }
        const findQuestion = user.securityQuestion;
        const getAnswer = user.securityAnswer;
        if (findQuestion === req.body.securityQuestion &&
            getAnswer === req.body.securityAnswer) {
            const hashedPassword = yield bcryptjs_1.default.hash(req.body.password, 10);
            const result = yield models_1.UserModel.findOneAndUpdate({ email: req.body.email }, { $set: { password: hashedPassword } });
            res.send({ message: "password updated successfully" });
        }
    }
    catch (error) {
        throw error;
    }
});
exports.default = forgotPasswordControllers;
//# sourceMappingURL=forgotPassword.controllers.js.map