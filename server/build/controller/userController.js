"use strict";
exports.__esModule = true;
exports.getUser = exports.getUsers = exports.deleteUser = exports.insertUser = void 0;
var userRepository_1 = require("../repository/userRepository");
var insertUser = function (req, res) {
    return userRepository_1.insertUserRepository(req, res);
};
exports.insertUser = insertUser;
var deleteUser = function (req, res) {
    return userRepository_1.deleteUserRepository(req, res);
};
exports.deleteUser = deleteUser;
var getUsers = function (req, res) {
    return userRepository_1.getUsersRepository(req, res);
};
exports.getUsers = getUsers;
var getUser = function (req, res) {
    return userRepository_1.getUserRepository(req, res);
};
exports.getUser = getUser;
//# sourceMappingURL=userController.js.map