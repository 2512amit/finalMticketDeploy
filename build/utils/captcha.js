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
exports.verifyCaptcha = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const querystring_1 = require("querystring");
const config_1 = require("../config");
const customErrorMessage_1 = require("../errorMessage/customErrorMessage");
const verifyCaptcha = (captcha) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!captcha) {
            return customErrorMessage_1.CUSTOM_ERROR_MESSAGE.CAPTCHA_NOT_PRESENT;
        }
        const query = (0, querystring_1.stringify)({
            secret: config_1.CAPTCHA_SECRET_KEY,
            response: captcha,
        });
        const verifyURL = `https://google.com/recaptcha/api/siteverify?${query}`;
        const response = yield (0, node_fetch_1.default)(verifyURL);
        const data = yield response.json();
        console.log(data);
        if (!data.success) {
            return false;
        }
        else if (data.success) {
            return true;
        }
    }
    catch (error) {
        throw error;
    }
});
exports.verifyCaptcha = verifyCaptcha;
//# sourceMappingURL=captcha.js.map