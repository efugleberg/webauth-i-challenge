const express = require("express");

const Users = require("./users-model.js");
const Authenticate = require("../authenticate/auth-middleware.js");

const router = express.Router();

router.get("/", Authenticate, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
