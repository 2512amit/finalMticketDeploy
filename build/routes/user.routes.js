"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.UserRouter = (0, express_1.Router)();
exports.UserRouter.get("/:id", controllers_1.getUserDetails);
//# sourceMappingURL=user.routes.js.map