"use strict";
exports.__esModule = true;
exports.getProyecto = exports.getProyectos = exports.deleteProyectos = exports.insertProyectos = void 0;
var proyectosRepository_1 = require("../repository/proyectosRepository");
var insertProyectos = function (req, res) {
    return proyectosRepository_1.insertProyectoRepository(req, res);
};
exports.insertProyectos = insertProyectos;
var deleteProyectos = function (req, res) {
    return proyectosRepository_1.deleteProyectoRepository(req, res);
};
exports.deleteProyectos = deleteProyectos;
var getProyectos = function (req, res) {
    return proyectosRepository_1.getProyectosRepository(req, res);
};
exports.getProyectos = getProyectos;
var getProyecto = function (req, res) {
    return proyectosRepository_1.getProyectoRepository(req, res);
};
exports.getProyecto = getProyecto;
//# sourceMappingURL=proyectoController.js.map