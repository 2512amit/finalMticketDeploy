"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.registerSchema = joi_1.default.object({
    name: joi_1.default.string().min(3).max(32).required(),
    email: joi_1.default.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
    phone: joi_1.default.string().max(13).required(),
    gender: joi_1.default.string().required(),
    occupation: joi_1.default.string().required(),
    securityQuestion: joi_1.default.string().required(),
    securityAnswer: joi_1.default.string().required(),
    password: joi_1.default.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
    confirmPassword: joi_1.default.ref("password"),
    captcha: joi_1.default.string(),
});
//# sourceMappingURL=register.validation.js.map