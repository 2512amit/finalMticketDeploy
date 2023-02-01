"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.refreshSchema = joi_1.default.object({
    refresh_token: joi_1.default.string().required(),
});
//# sourceMappingURL=refresh.validation.js.map