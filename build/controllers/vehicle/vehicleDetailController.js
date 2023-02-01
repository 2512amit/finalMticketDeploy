"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vehicleBooking_schema_1 = __importDefault(require("../../models/vehiclesModel/vehicleBooking.schema"));
const vehicles_shema_1 = __importDefault(require("../../models/vehiclesModel/vehicles.shema"));
const vehiclesDetailSchema_1 = __importDefault(require("../../models/vehiclesModel/vehiclesDetailSchema"));
const axios_1 = __importDefault(require("axios"));
const redis_connection_1 = require("../../database/redis.connection");
const fetchApiData = (species) => __awaiter(void 0, void 0, void 0, function* () {
    const apiResponse = yield axios_1.default.get(`https://www.fishwatch.gov/api/species/${species}`);
    return apiResponse.data;
});
const getSpeciesData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result;
        const { species } = req.params;
        let isCached = false;
        const cacheResults = yield redis_connection_1.redisClient.get(species);
        if (cacheResults) {
            isCached = true;
            result = JSON.parse(cacheResults);
        }
        else {
            result = yield fetchApiData(species);
            if (result.length === 0) {
                throw "API returned an empty array";
            }
        }
        yield redis_connection_1.redisClient.set(species, JSON.stringify(result), {
            EX: 180,
            NX: true
        });
        res.send({
            fromCache: isCached,
            data: result
        });
    }
    catch (error) {
        res.status(404).send("Data not found");
    }
});
const calculateDistanceDurationAndFare = (arrayLength, result, getType) => {
    const startingDistance = result[arrayLength - 1].destinationDistance;
    const lastStopDistance = result[0].destinationDistance;
    const totalDistance = Math.abs(startingDistance - lastStopDistance);
    const startingDuration = result[arrayLength - 1].destinationDuration;
    const lastStopDuration = result[0].destinationDuration;
    const totalTravelTime = Math.abs(startingDuration - lastStopDuration);
    let fixedFare;
    switch (getType) {
        case "ACSEATER":
            fixedFare = totalDistance * 9;
            break;
        case "NONACSEATER":
            fixedFare = totalDistance * 6;
            break;
        case "NONACSLEEPER":
            fixedFare = totalDistance * 8;
            break;
        case "ACSLEEPER":
            fixedFare = totalDistance * 12;
            break;
        default:
            break;
    }
    return { totalDistance, totalTravelTime, fixedFare };
};
const calculateSourceDistanceDurationAndFare = (arrayLength, result, getType) => {
    const startingDistance = result[arrayLength - 1].sourceDistance;
    const lastStopDistance = result[0].sourceDistance;
    const totalDistance = Math.abs(startingDistance - lastStopDistance);
    const startingDuration = result[arrayLength - 1].sourceDuration;
    const lastStopDuration = result[0].sourceDuration;
    const totalTravelTime = Math.abs(startingDuration - lastStopDuration);
    let fixedFare;
    switch (getType) {
        case "ACSEATER":
            fixedFare = totalDistance * 9;
            break;
        case "NONACSEATER":
            fixedFare = totalDistance * 6;
            break;
        case "NONACSLEEPER":
            fixedFare = totalDistance * 8;
            break;
        case "ACSLEEPER":
            fixedFare = totalDistance * 12;
            break;
        default:
            break;
    }
    return { totalDistance, totalTravelTime, fixedFare };
};
const vehicleDetailController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { vehicleClassType, vehicleType, vehicleNumber, station, seatDetails, TotalAvailableSeat, vehicleName, dayOnWhichItRuns, routeStartDate, routeEndDate, operatorName, amenities, } = req.body;
    try {
        const VehicleInfo = yield vehicles_shema_1.default.findOne({ vehicleName: "Bus" });
        const vehicleDetail = new vehiclesDetailSchema_1.default({
            vehicleID: VehicleInfo === null || VehicleInfo === void 0 ? void 0 : VehicleInfo._id,
            vehicleClassType: vehicleClassType,
            vehicleType: vehicleType,
            vehicleNumber: vehicleNumber,
            station: station,
            seatDetails: seatDetails,
            TotalAvailableSeat: TotalAvailableSeat,
            vehicleName: vehicleName,
            dayOnWhichItRuns: dayOnWhichItRuns,
            routeStartDate: routeStartDate,
            routeEndDate: routeEndDate,
            operatorName: operatorName,
            amenities: amenities,
        });
        const result = yield vehicleDetail.save();
        yield vehicleBooking_schema_1.default.create({
            vechileId: result._id
        });
        res.send({
            message: "vehicle detail created successfully",
        });
    }
    catch (error) {
        return next(error);
    }
});
const getAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield vehiclesDetailSchema_1.default.find();
        res.send(result);
    }
    catch (error) {
        throw error;
    }
});
const LIMIT_PER_PAGE = 5;
const PAGE_NUMBER = 1;
const getSearchResult = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { from, to, date, filterBy, sortBy } = req.body;
        const { limit, page, orderBy } = req.query;
        // console.log(filterBy.hasOwnProperty('sourceDepartureTime'))
        const lengthOfFilterObject = Object.values(filterBy).length;
        //  const lengthOfSortObject=Object.values(sortBy).length
        let limitPerPage = Number(limit) || LIMIT_PER_PAGE;
        let pageNumber = Number(page) || PAGE_NUMBER;
        const totalRecord = yield vehiclesDetailSchema_1.default.count();
        const previousPage = (page || pageNumber) >= 1;
        const nextPage = (Number(page) || pageNumber) - 1 <= (Math.floor(totalRecord / (Number(limit) || limitPerPage))) - Number(page) - 1;
        const result = yield vehiclesDetailSchema_1.default.find({
            isDeleted: false,
            $and: [
                {
                    station: {
                        $all: [
                            { $elemMatch: { sourceName: from } },
                            { $elemMatch: { sourceName: to } },
                        ],
                    },
                },
            ],
        })
            .select("-isDeleted -createdAt -updatedAt -__v -vehicleID")
            .skip(((Number(page) || 1) - 1) * (Number(limit) || 2))
            .limit(Number(limit) || 2)
            .lean();
        const stationDetail = result.map((item) => {
            let stationObj = item.station.sort((firstElem, secElement) => firstElem.stationId > secElement.stationId ? 1 : -1);
            const fromStationDataIndex = stationObj.findIndex((elem) => elem.sourceName === from);
            const toStationDataIndex = stationObj.findIndex((elem) => elem.sourceName === to);
            const isSourceStationIndexIsBigger = toStationDataIndex > fromStationDataIndex;
            const getVehicleType = item.vehicleType;
            const getVehicleClassType = item.vehicleClassType;
            const getType = getVehicleType.concat(getVehicleClassType);
            if (!isSourceStationIndexIsBigger) {
                stationObj = item.station.sort((firstElem, secElement) => firstElem.stationId > secElement.stationId ? -1 : 1);
                const fromStationDataIndex = stationObj.findIndex((elem) => elem.sourceName === from);
                const toStationDataIndex = stationObj.findIndex((elem) => elem.sourceName === to);
                const result = item.station.slice(fromStationDataIndex, toStationDataIndex + 1);
                const arrayLength = result.length;
                const value = calculateDistanceDurationAndFare(arrayLength, result, getType);
                const { routeEndDate, routeStartDate } = item, restItem = __rest(item, ["routeEndDate", "routeStartDate"]);
                return Object.assign(Object.assign(Object.assign({}, restItem), value), { station: result });
            }
            else {
                const result = stationObj.slice(fromStationDataIndex, toStationDataIndex + 1);
                const arrayLength = result.length;
                const value = calculateSourceDistanceDurationAndFare(arrayLength, result, getType);
                const { routeEndDate, routeStartDate } = item, restItem = __rest(item, ["routeEndDate", "routeStartDate"]);
                return Object.assign(Object.assign(Object.assign({}, restItem), value), { station: result });
            }
        });
        // SEARCH AFTER SPECIFIYING THE DATE
        const startDateResult = result.map((item) => item.routeStartDate.getTime());
        const endDateResult = result.map((item) => item.routeEndDate.getTime());
        let dateToCompare = new Date(date);
        if (startDateResult[0] <= dateToCompare &&
            dateToCompare <= endDateResult[0] && lengthOfFilterObject === 0
        // && lengthOfSortObject===0
        ) {
            return res.send({ data: stationDetail, totalRecord, previousPage, nextPage });
        }
        else if (startDateResult[0] <= dateToCompare &&
            dateToCompare <= endDateResult[0] && lengthOfFilterObject != 0
        // && lengthOfSortObject!=0
        ) {
            let filtered = stationDetail.filter(obj => Object.entries(filterBy)
                .every(([prop, find]) => find
                .includes(obj[prop])));
            // let filteredArray=[]
            // for(let i=0;i<filtered.length;i++){
            //   filteredArray.push(stationDetail[i]["station"])
            // }
            // console.log(filteredArray.flat().filter(obj=>
            //   Object.entries(sortBy)
            //   .every(([prop,find])=>(find as any)
            //   .includes(obj[prop])
            //   )
            //  ))
            //  console.log(Object.values(filterBy))
            console.log(filterBy.hasOwnProperty("BoardingPoint"));
            return res.send({ data: filtered, totalRecord, previousPage, nextPage });
        }
        else {
            return next("Bus does not run on the specified date");
        }
    }
    catch (error) {
        throw error;
    }
});
exports.default = {
    vehicleDetailController,
    getAll,
    getSearchResult,
    getSpeciesData
};
//# sourceMappingURL=vehicleDetailController.js.map