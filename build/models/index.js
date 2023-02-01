"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityQuestion = exports.RefreshToken = exports.UserModel = void 0;
var user_schema_1 = require("./registerModel/user.schema");
Object.defineProperty(exports, "UserModel", { enumerable: true, get: function () { return __importDefault(user_schema_1).default; } });
var refreshToken_schema_1 = require("./refreshToken.schema");
Object.defineProperty(exports, "RefreshToken", { enumerable: true, get: function () { return __importDefault(refreshToken_schema_1).default; } });
var securityQuestion_schema_1 = require("./registerModel/securityQuestion.schema");
Object.defineProperty(exports, "SecurityQuestion", { enumerable: true, get: function () { return __importDefault(securityQuestion_schema_1).default; } });
//# sourceMappingURL=index.js.map