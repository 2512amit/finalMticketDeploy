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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = require("nodemailer");
const config_1 = require("../config");
const sendEmail = (to, subject, message) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transport = (0, nodemailer_1.createTransport)({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
                user: "pearl.rosenbaum@ethereal.email",
                pass: config_1.EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        yield transport.sendMail({
            to,
            subject,
            text: message,
            from: "amit.kumar@coditas.com",
        });
        return true;
    }
    catch (e) {
        throw e;
    }
});
exports.sendEmail = sendEmail;
//# sourceMappingURL=email.js.map