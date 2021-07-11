"use strict";
exports.__esModule = true;
exports.getMaquina = exports.getMaquinas = exports.deleteMaquina = exports.insertMaquina = void 0;
var maquinaRepository_1 = require("../repository/maquinaRepository");
var insertMaquina = function (req, res) {
    return maquinaRepository_1.insertMaquinaRepository(req, res);
};
exports.insertMaquina = insertMaquina;
var deleteMaquina = function (req, res) {
    return maquinaRepository_1.deleteMaquinaRepository(req, res);
};
exports.deleteMaquina = deleteMaquina;
var getMaquinas = function (req, res) {
    return maquinaRepository_1.getMaquinasRepository(req, res);
};
exports.getMaquinas = getMaquinas;
var getMaquina = function (req, res) {
    return maquinaRepository_1.getMaquinaRepository(req, res);
};
exports.getMaquina = getMaquina;
//# sourceMappingURL=maquinaController.js.map