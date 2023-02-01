"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.AuthRouter = (0, express_1.Router)();
exports.AuthRouter.post("/signup", controllers_1.registerControllers),
    exports.AuthRouter.post("/login", controllers_1.loginControllers),
    exports.AuthRouter.post("/refresh", controllers_1.refreshControllers),
    exports.AuthRouter.post("/logout", controllers_1.logoutControllers);
exports.AuthRouter.put("/forgotPassword", controllers_1.forgotPassword);
//# sourceMappingURL=auth.routes.js.map