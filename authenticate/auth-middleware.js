const db = require("../database/dbConfig.js");
const Users = require("../users/users-model.js");
const bcrypt = require("bcryptjs");

module.exports = function authenticate(req, res, next) {
  const { username, password } = req.headers;

  if (username && password) {
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          next();
        } else {
          res.status(401).json({ message: "you shall not pass!" });
        }
      })
      .catch(error => {
        res.status(500).json({ message: "unexpected error" });
      });
  } else {
    res.status(400).json({ message: "you shall not pass!" });
  }
};
