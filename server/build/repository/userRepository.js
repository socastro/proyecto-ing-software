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
exports.deleteUserRepository = exports.insertUserRepository = exports.getUserRepository = exports.getUsersRepository = void 0;
require("reflect-metadata");
var User_1 = require("../model/User");
var typeorm_1 = require("typeorm");
var getUsersRepository = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, typeorm_1.getRepository(User_1.User).find()];
            case 1:
                users = _a.sent();
                return [2, res.json(users)];
        }
    });
}); };
exports.getUsersRepository = getUsersRepository;
var getUserRepository = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, typeorm_1.getRepository(User_1.User).findOne(req.params.mail)];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2, res.json({
                            succesfull: false,
                            message: "Usuario no encontrado"
                        })];
                }
                return [2, res.json({
                        succesfull: true,
                        user: user
                    })];
        }
    });
}); };
exports.getUserRepository = getUserRepository;
var insertUserRepository = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.body.name ||
                    !req.body.carrera ||
                    !req.body.actividad ||
                    !req.body.mail ||
                    !req.body.genero ||
                    !req.body.campus ||
                    !req.body.ingreso) {
                    return [2, res.json({
                            status: 'NONK',
                            message: 'Error al crear usuario, faltan parametros'
                        })];
                }
                req.body.maquinas = "";
                return [4, typeorm_1.getRepository(User_1.User).create(req.body)];
            case 1:
                user = _a.sent();
                return [4, typeorm_1.getRepository(User_1.User).save(user)];
            case 2:
                result = _a.sent();
                return [2, res.json({
                        status: 'OK',
                        message: 'Usuario creado correctamente',
                        result: result
                    })];
        }
    });
}); };
exports.insertUserRepository = insertUserRepository;
var deleteUserRepository = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, typeorm_1.getRepository(User_1.User).findOne(req.params.id)];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2, res.json({
                            code: 400,
                            status: "NOK",
                            message: 'Usuario no encontrado'
                        })];
                }
                return [4, typeorm_1.getRepository(User_1.User)["delete"](user)];
            case 2:
                _a.sent();
                return [2, res.json({
                        code: 200,
                        message: 'Usuario eliminado correctamente',
                        user: user
                    })];
        }
    });
}); };
exports.deleteUserRepository = deleteUserRepository;
//# sourceMappingURL=userRepository.js.map