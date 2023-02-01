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
exports.getAllQuestions = exports.securityQuestionController = void 0;
const models_1 = require("../../models");
const securityQuestion_repo_1 = __importDefault(require("../../repo/securityQuestion.repo"));
const securityQuestion_validation_1 = require("../../validation/securityQuestion.validation");
const securityQuestionController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = securityQuestion_validation_1.securityQuestionSchema.validate(req.body);
    if (error) {
        return next(error);
    }
    const { question } = req.body;
    const securityQuestion = new models_1.SecurityQuestion({
        question: question,
    });
    try {
        const result = yield securityQuestion.save();
        return res.send(result);
    }
    catch (error) {
        return next(error);
    }
});
exports.securityQuestionController = securityQuestionController;
const getAllQuestions = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield securityQuestion_repo_1.default.getAll();
        return questions;
    }
    catch (err) {
        throw err;
    }
});
exports.getAllQuestions = getAllQuestions;
//# sourceMappingURL=securityQuestion.controllers.js.map