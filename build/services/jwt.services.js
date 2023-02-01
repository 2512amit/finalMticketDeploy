"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtService {
    static sign(payload, expiry = config_1.JWT_SECRET_EXPIRES_IN, secret = config_1.JWT_SECRET) {
        return jsonwebtoken_1.default.sign(payload, secret || "", { expiresIn: expiry });
    }
    static verify(token, secret = config_1.JWT_SECRET) {
        return jsonwebtoken_1.default.verify(token, secret || "");
    }
}
exports.default = JwtService;
//# sourceMappingURL=jwt.services.js.map