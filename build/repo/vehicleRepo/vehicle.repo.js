"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stationName_schema_1 = __importDefault(require("../../models/vehiclesModel/stationName.schema"));
const vehicles_shema_1 = __importDefault(require("../../models/vehiclesModel/vehicles.shema"));
const create = (vehicle) => {
    return vehicles_shema_1.default.create(vehicle);
};
const get = () => {
    return stationName_schema_1.default.find().select("-isDeleted -createdAt -updatedAt -__v");
};
exports.default = {
    create,
    get
};
//# sourceMappingURL=vehicle.repo.js.map