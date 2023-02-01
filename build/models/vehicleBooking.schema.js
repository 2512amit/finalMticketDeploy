"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleBookingSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../utils/base.schema");
exports.vehicleBookingSchema = new base_schema_1.BaseSchema({
    vehicleName: {
        type: String,
        required: true,
    },
    vehicleNumber: {
        type: String,
        required: true,
        unique: true,
    },
    sourceStation: {
        type: String,
        required: true,
    },
    destinationStation: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    fare: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    arrivalTime: {
        type: Date,
        required: true,
    },
    depatureTime: {
        type: Date,
        required: true,
    },
});
const vehicleBookingModel = (0, mongoose_1.model)("vehicleBooking", exports.vehicleBookingSchema);
exports.default = vehicleBookingModel;
//# sourceMappingURL=vehicleBooking.schema.js.map