"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utils/base.schema");
exports.VehicleSchema = new base_schema_1.BaseSchema({
    vehicleName: {
        type: String,
        required: true,
    },
    vehicleID: {
        type: String,
        required: true,
        unique: true,
    },
});
const VehicleModel = (0, mongoose_1.model)("vehicle", exports.VehicleSchema);
exports.default = VehicleModel;
//# sourceMappingURL=vehicles.shema.js.map