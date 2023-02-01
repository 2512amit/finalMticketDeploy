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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const refresh_validation_1 = require("../../validation/refresh.validation");
const logoutControllers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = refresh_validation_1.refreshSchema.validate(req.body);
    if (error) {
        return next(error);
    }
    try {
        yield models_1.RefreshToken.deleteOne({ token: req.body.refresh_token });
    }
    catch (error) {
        return next(error);
    }
    res.json({ status: 1 });
});
exports.default = logoutControllers;
//# sourceMappingURL=logout.controllers.js.map