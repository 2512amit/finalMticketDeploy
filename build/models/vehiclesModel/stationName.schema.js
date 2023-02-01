"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utils/base.schema");
const stationNameSchame = new base_schema_1.BaseSchema({
    stationName: {
        type: String,
        required: true
    },
    station_id: {
        type: Number,
        required: true
    }
});
const StationNameModel = (0, mongoose_1.model)("stationName", stationNameSchame);
exports.default = StationNameModel;
//# sourceMappingURL=stationName.schema.js.map