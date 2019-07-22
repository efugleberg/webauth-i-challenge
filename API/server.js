const express = require("express");

const UsersRouter = require("../users/users-router.js");
const AuthRouter = require("../authenticate/auth-router.js");

const server = express();

server.use(express.json());

server.use("/api/users", UsersRouter);
server.use("/api", AuthRouter);

module.exports = server;
