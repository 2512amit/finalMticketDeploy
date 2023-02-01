"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const securityQuestion_schema_1 = __importDefault(require("../models/registerModel/securityQuestion.schema"));
const getAll = () => securityQuestion_schema_1.default.aggregate([
    {
        $match: {
            isDeleted: false,
        },
    },
    {
        $sort: {
            createdAt: 1,
        },
    },
    {
        $project: {
            question: 1,
        },
    },
]);
exports.default = {
    getAll,
};
//# sourceMappingURL=securityQuestion.repo.js.map