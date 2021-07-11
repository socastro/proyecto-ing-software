"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userController_1 = require("../controller/userController");
var router = express_1.Router();
router.get("/users", userController_1.getUsers);
router.get("/user/:mail", userController_1.getUser);
router.post("/user", userController_1.insertUser);
router["delete"]("/user/:id", userController_1.deleteUser);
exports["default"] = router;
//# sourceMappingURL=user.routes.js.map