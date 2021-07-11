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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteProyectoRepository = exports.insertProyectoRepository = exports.getProyectoRepository = exports.getProyectosRepository = void 0;
require("reflect-metadata");
var Proyecto_1 = require("../model/Proyecto");
var typeorm_1 = require("typeorm");
var getProyectosRepository = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var proyectos;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, typeorm_1.getRepository(Proyecto_1.Proyecto).find()];
            case 1:
                proyectos = _a.sent();
                return [2, res.json(proyectos)];
        }
    });
}); };
exports.getProyectosRepository = getProyectosRepository;
var getProyectoRepository = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var proyectos;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, typeorm_1.getRepository(Proyecto_1.Proyecto).findOne(req.params.name)];
            case 1:
                proyectos = _a.sent();
                if (!proyectos) {
                    return [2, res.json({
                            succesfull: false,
                            message: "Proyecto no encontrado"
                        })];
                }
                return [2, res.json({
                        succesfull: true,
                        proyectos: proyectos
                    })];
        }
    });
}); };
exports.getProyectoRepository = getProyectoRepository;
var insertProyectoRepository = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var proyecto, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.body.name ||
                    !req.body.leader_name ||
                    !req.body.email ||
                    !req.body.resumen_ejecutivo ||
                    !req.body.integrantes ||
                    !req.body.tipo_proyecto) {
                    return [2, res.json({
                            status: 'NONK',
                            message: 'Error al crear proyecto, faltan parametros'
                        })];
                }
                return [4, typeorm_1.getRepository(Proyecto_1.Proyecto).create(req.body)];
            case 1:
                proyecto = _a.sent();
                return [4, typeorm_1.getRepository(Proyecto_1.Proyecto).save(proyecto)];
            case 2:
                result = _a.sent();
                return [2, res.json({
                        status: 'OK',
                        message: 'Proyecto creado correctamente',
                        result: result
                    })];
        }
    });
}); };
exports.insertProyectoRepository = insertProyectoRepository;
var deleteProyectoRepository = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var proyecto;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, typeorm_1.getRepository(Proyecto_1.Proyecto).findOne(req.params.id)];
            case 1:
                proyecto = _a.sent();
                if (!proyecto) {
                    return [2, res.json({
                            code: 400,
                            status: "NOK",
                            message: 'Proyecto no encontrado'
                        })];
                }
                return [4, typeorm_1.getRepository(Proyecto_1.Proyecto)["delete"](proyecto)];
            case 2:
                _a.sent();
                return [2, res.json({
                        code: 200,
                        message: 'Proyecto eliminado correctamente',
                        proyecto: proyecto
                    })];
        }
    });
}); };
exports.deleteProyectoRepository = deleteProyectoRepository;
//# sourceMappingURL=proyectosRepository.js.map