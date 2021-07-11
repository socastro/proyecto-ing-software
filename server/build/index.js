"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var typeorm_1 = require("typeorm");
var proyecto_routes_1 = __importDefault(require("./routes/proyecto.routes"));
var maquina_routes_1 = __importDefault(require("./routes/maquina.routes"));
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var cors = require('cors');
var server = express_1["default"]();
server.use(cors());
server.use(express_1["default"].json());
server.use(body_parser_1["default"].json());
server.use(body_parser_1["default"].urlencoded({
    extended: true
}));
typeorm_1.createConnection().then(function () { return console.log('Conexión creada'); })["catch"](function (error) { return console.log('Error en la conexión', error); });
server.use(proyecto_routes_1["default"], maquina_routes_1["default"], user_routes_1["default"]);
console.log("index.ja imprimeinedo")
server.listen(3001, function () {
    console.log("running on port 3001");
});
//# sourceMappingURL=index.js.map