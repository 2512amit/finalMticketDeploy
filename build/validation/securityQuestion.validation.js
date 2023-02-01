"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.securityQuestionSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.securityQuestionSchema = joi_1.default.object({
    question: joi_1.default.string().required(),
});
//# sourceMappingURL=securityQuestion.validation.js.map