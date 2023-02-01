"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FIREBASEMEASURMENTID = exports.FIREBASEAPPID = exports.FIREBASEMESSANGINGSENDERID = exports.FIREBASESTORAGEBUCKET = exports.FIREBASEPROJECTID = exports.FIREBASEAUTHDOMAIN = exports.FIREBASEAPIKEY = exports.SECRET_KEY = exports.PUBLISHABLE_KEY = exports.NODE_TLS_REJECT_UNAUTHORIZED = exports.EMAIL_PASSWORD = exports.CAPTCHA_SECRET_KEY = exports.DEBUG_MODE = exports.JWT_SECRET_EXPIRES_IN = exports.REFRESH_SECRET_EXPIRES_IN = exports.APP_URL = exports.REFRESH_TOKEN = exports.JWT_SECRET = exports.MONGO_URI = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
_a = process.env, exports.PORT = _a.PORT, exports.MONGO_URI = _a.MONGO_URI, exports.JWT_SECRET = _a.JWT_SECRET, exports.REFRESH_TOKEN = _a.REFRESH_TOKEN, exports.APP_URL = _a.APP_URL, exports.REFRESH_SECRET_EXPIRES_IN = _a.REFRESH_SECRET_EXPIRES_IN, exports.JWT_SECRET_EXPIRES_IN = _a.JWT_SECRET_EXPIRES_IN, exports.DEBUG_MODE = _a.DEBUG_MODE, exports.CAPTCHA_SECRET_KEY = _a.CAPTCHA_SECRET_KEY, exports.EMAIL_PASSWORD = _a.EMAIL_PASSWORD, exports.NODE_TLS_REJECT_UNAUTHORIZED = _a.NODE_TLS_REJECT_UNAUTHORIZED, exports.PUBLISHABLE_KEY = _a.PUBLISHABLE_KEY, exports.SECRET_KEY = _a.SECRET_KEY, exports.FIREBASEAPIKEY = _a.FIREBASEAPIKEY, exports.FIREBASEAUTHDOMAIN = _a.FIREBASEAUTHDOMAIN, exports.FIREBASEPROJECTID = _a.FIREBASEPROJECTID, exports.FIREBASESTORAGEBUCKET = _a.FIREBASESTORAGEBUCKET, exports.FIREBASEMESSANGINGSENDERID = _a.FIREBASEMESSANGINGSENDERID, exports.FIREBASEAPPID = _a.FIREBASEAPPID, exports.FIREBASEMEASURMENTID = _a.FIREBASEMEASURMENTID;
//# sourceMappingURL=index.js.map