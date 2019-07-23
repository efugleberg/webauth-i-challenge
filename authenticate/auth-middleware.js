const db = require("../database/dbConfig.js");
const Users = require("../users/users-model.js");
const bcrypt = require("bcryptjs");

module.exports = function authenticate(req, res, next) {
  // ****** Check that the client has a session middleware  *****
  if (req.session && req.session.username) {
    next();
  } else {
    res.status(401).json({ message: "You shall not pass" });
  }

  //  ******  This is the code for writing a restricted path with headers |||| Headers Middleware   *****
  //   const { username, password } = req.headers;

  //   if (username && password) {
  //     Users.findBy({ username })
  //       .first()
  //       .then(user => {
  //         if (user && bcrypt.compareSync(password, user.password)) {
  //           next();
  //         } else {
  //           res.status(401).json({ message: "you shall not pass!" });
  //         }
  //       })
  //       .catch(error => {
  //         res.status(500).json({ message: "unexpected error" });
  //       });
  //   } else {
  //     res.status(400).json({ message: "you shall not pass!" });
  //   }
};
