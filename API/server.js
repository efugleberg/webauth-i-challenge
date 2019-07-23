const express = require("express");

const UsersRouter = require("../users/users-router.js");
const AuthRouter = require("../authenticate/auth-router.js");
const setupGlobalMiddleware = require('./global-middleware.js');

const server = express();

setupGlobalMiddleware(server);

// server.use(express.json());

server.use("/api/users", UsersRouter);
server.use("/api/auth", AuthRouter);

module.exports = server;
