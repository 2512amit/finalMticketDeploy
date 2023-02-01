"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.busDetailsSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.busDetailsSchema = joi_1.default.object({
    busNumber: joi_1.default.string().min(3).max(8).required(),
    busName: joi_1.default.string().required(),
    sourceStation: joi_1.default.string().required(),
    destinationStation: joi_1.default.string().required(),
    class: joi_1.default.string().required(),
    status: joi_1.default.string().required(),
    fare: joi_1.default.string().required(),
    date: joi_1.default.date().iso().required(),
    arrivalTime: joi_1.default.date().iso().required(),
    depatureTime: joi_1.default.date().iso().greater(joi_1.default.ref("arrivalTime")).required(),
});
//# sourceMappingURL=busDetails.validation.js.map