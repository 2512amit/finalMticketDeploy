"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleDetailSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utils/base.schema");
exports.vehicleDetailSchema = new base_schema_1.BaseSchema({
    vehicleID: {
        type: String,
        required: true
    },
    vehicleClassType: {
        type: String,
        required: true
    },
    vehicleType: {
        type: String,
        required: true
    },
    vehicleNumber: {
        type: String,
        required: true,
        unique: true,
    },
    station: {
        type: [
            { sourceName: {
                    type: String,
                    required: true,
                },
                stationId: {
                    type: Number,
                    required: true,
                },
                sourceDepartureTime: {
                    type: String,
                    required: true,
                },
                sourceArrivalTime: {
                    type: String,
                    required: true,
                },
                sourceDistance: {
                    type: Number,
                    required: true,
                },
                sourceDuration: {
                    type: Number,
                    required: true,
                },
                BoardingPoint: {
                    type: [
                        {
                            pickUpTime: {
                                type: String,
                                required: true,
                            },
                            pickUpPoint: {
                                type: String,
                                required: true,
                            }
                        }
                    ],
                    default: undefined
                },
                destinationDepartureTime: {
                    type: String,
                    required: true,
                },
                destinationArrivalTime: {
                    type: String,
                    required: true,
                },
                destinationDistance: {
                    type: Number,
                    required: true,
                },
                destinationDuration: {
                    type: Number,
                    required: true,
                }
            }
        ],
        default: undefined
    },
    TotalAvailableSeat: {
        type: String,
        required: true
    },
    seatDetails: {
        type: [
            {
                seatNo: {
                    type: String,
                    required: true,
                },
                seatFare: {
                    type: Number,
                    required: true,
                },
                status: {
                    type: String,
                    default: "available"
                },
                bookedGender: {
                    type: String,
                    default: "male"
                }
            }
        ],
        default: undefined
    },
    vehicleName: {
        type: String,
        required: true
    },
    dayOnWhichItRuns: {
        type: Array,
        required: true
    },
    routeStartDate: {
        type: Date,
        required: true
    },
    routeEndDate: {
        type: Date,
        required: true
    },
    operatorName: {
        type: String,
        required: true
    },
    amenities: {
        type: Array,
        required: true
    }
});
const VehicleDetailModel = (0, mongoose_1.model)("vehicleDetail", exports.vehicleDetailSchema);
exports.default = VehicleDetailModel;
//# sourceMappingURL=vehiclesDetailSchema.js.map