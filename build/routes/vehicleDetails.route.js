"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleDetailRouter = void 0;
const express_1 = require("express");
const vehicleDetailController_1 = __importDefault(require("../controllers/vehicle/vehicleDetailController"));
exports.vehicleDetailRouter = (0, express_1.Router)();
exports.vehicleDetailRouter.get("/getAll", vehicleDetailController_1.default.getAll);
exports.vehicleDetailRouter.get("/fish/:species", vehicleDetailController_1.default.getSpeciesData);
exports.vehicleDetailRouter.post('/', vehicleDetailController_1.default.vehicleDetailController);
exports.vehicleDetailRouter.post('/search/:filterBy?/:sortBy?', vehicleDetailController_1.default.getSearchResult);
exports.vehicleDetailRouter.get('/', vehicleDetailController_1.default.getAll);
//# sourceMappingURL=vehicleDetails.route.js.map