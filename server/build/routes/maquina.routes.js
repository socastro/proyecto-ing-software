"use strict";
exports.__esModule = true;
var express_1 = require("express");
var maquinaController_1 = require("../controller/maquinaController");
var router = express_1.Router();
router.get("/maquinas", maquinaController_1.getMaquinas);
router.get("/maquina/:name", maquinaController_1.getMaquina);
router.post("/maquina", maquinaController_1.insertMaquina);
router["delete"]("/maquina/:id", maquinaController_1.deleteMaquina);
exports["default"] = router;
//# sourceMappingURL=maquina.routes.js.map