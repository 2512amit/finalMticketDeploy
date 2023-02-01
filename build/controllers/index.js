"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPassword = exports.getUserDetails = exports.logoutControllers = exports.refreshControllers = exports.loginControllers = exports.registerControllers = void 0;
var register_controllers_1 = require("./auth/register.controllers");
Object.defineProperty(exports, "registerControllers", { enumerable: true, get: function () { return __importDefault(register_controllers_1).default; } });
var login_controllers_1 = require("./auth/login.controllers");
Object.defineProperty(exports, "loginControllers", { enumerable: true, get: function () { return __importDefault(login_controllers_1).default; } });
var refresh_controllers_1 = require("./auth/refresh.controllers");
Object.defineProperty(exports, "refreshControllers", { enumerable: true, get: function () { return __importDefault(refresh_controllers_1).default; } });
var logout_controllers_1 = require("./auth/logout.controllers");
Object.defineProperty(exports, "logoutControllers", { enumerable: true, get: function () { return __importDefault(logout_controllers_1).default; } });
var user_controllers_1 = require("./user/user.controllers");
Object.defineProperty(exports, "getUserDetails", { enumerable: true, get: function () { return __importDefault(user_controllers_1).default; } });
var forgotPassword_controllers_1 = require("./forgotPassword/forgotPassword.controllers");
Object.defineProperty(exports, "forgotPassword", { enumerable: true, get: function () { return __importDefault(forgotPassword_controllers_1).default; } });
//# sourceMappingURL=index.js.map