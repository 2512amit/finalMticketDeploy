"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleDetailsValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.VehicleDetailsValidation = joi_1.default.object({
    vehicleId: joi_1.default.string().required(),
    vehicleName: joi_1.default.string().required(),
    vehicleNumber: joi_1.default.string().required(),
    TotalAvailableSeat: joi_1.default.number().required(),
    classes: joi_1.default.string().required(),
    dayOnWhichItRuns: joi_1.default.object().keys(),
    date: joi_1.default.date().iso().required(),
    arrivalTime: joi_1.default.date().iso().required(),
    depatureTime: joi_1.default.date().iso().greater(joi_1.default.ref("arrivalTime")).required(),
});
//# sourceMappingURL=vehicleDetail.validation.js.map