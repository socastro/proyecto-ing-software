"use strict";
exports.__esModule = true;
var express_1 = require("express");
var proyectoController_1 = require("../controller/proyectoController");
var router = express_1.Router();
router.get("/proyectos", proyectoController_1.getProyectos);
router.get("/proyectos/:name", proyectoController_1.getProyecto);
router.post("/proyectos", proyectoController_1.insertProyectos);
router["delete"]("/proyectos/:id", proyectoController_1.deleteProyectos);
exports["default"] = router;
//# sourceMappingURL=proyecto.routes.js.map