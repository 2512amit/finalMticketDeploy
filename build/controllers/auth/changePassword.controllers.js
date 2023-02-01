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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const error_constant_1 = require("../../constants/error.constant");
const models_1 = require("../../models");
const changePasswordControllers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, oldPassword, newPassword, confirmPassword } = req.body;
    try {
        const user = yield models_1.UserModel.findOne({ email: email });
        if (!user) {
            return next(error_constant_1.ERROR_MESSAGE.NOT_FOUND);
        }
        const comparePassword = yield bcryptjs_1.default.compare(oldPassword, user.password);
        if (comparePassword && newPassword === confirmPassword) {
            const newHashPassword = yield bcryptjs_1.default.hash(newPassword, 10);
            const result = yield models_1.UserModel.findOneAndUpdate({ email: req.body.email }, { $set: { password: newHashPassword } });
            res.send({ message: 'password changed successfully', statusCode: 200 });
        }
        else {
            return next(error_constant_1.ERROR_MESSAGE.NOT_FOUND);
        }
    }
    catch (error) {
        throw error;
    }
});
exports.default = changePasswordControllers;
//# sourceMappingURL=changePassword.controllers.js.map