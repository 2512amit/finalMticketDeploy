"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vehiclesDetailSchema_1 = __importDefault(require("../../models/vehiclesModel/vehiclesDetailSchema"));
const get = (page, limits, filter, value = "", sortBy, order) => vehiclesDetailSchema_1.default.find({
    isDeleted: false,
    // "vehicleType": "AC",
    // "vehichleClassType": "SEATER"
    [filter || "classes"]: { $regex: new RegExp("^" + (value || '') + ".*", "i") },
})
    .sort({ [sortBy || "TotalAvailableSeat"]: order })
    .skip(((page || 1) - 1) * (limits || 2))
    .limit(limits || 2);
const getTotalCount = () => {
    return vehiclesDetailSchema_1.default.find({ $isDeleted: false }).count();
};
exports.default = {
    get,
    getTotalCount
};
//# sourceMappingURL=vehicleDetails.repo.js.map