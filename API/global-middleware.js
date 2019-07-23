const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session"); // *****  */  Step 1.   Install this with npm i express-session
const KnexSessionStore = require("connect-session-knex")(session); //  Install this so that the server won't forget a session if it restarts -- npm i connect-session-knex

module.exports = server => {
  // *******   */  Step 2.  Create the config object!!
  const sessionConfig = {
    name: "user_session", //  will default to sid (session id)
    secret: "keep it cool", //  to encrypt & decrypt the cookie
    cookie: {
      maxAge: 1000 * 60 * 10, //  1000 milliseconds * 60 seconds * 10 = 10 minutes
      secure: false //  In production, this will be true -> only send cookies of https
    },
    httpOnly: true, //  don't let JS code access cookies.  Broswer extensions run JS code on your browser!
    resave: false,
    saveUninitiated: true,
    store: new KnexSessionStore({
      // Remember to make this a new KnexSessionStore
      knex: require("../database/dbConfig.js"),
      tablename: "sessions",
      createtable: true,
      sidfieldname: "sid",
      clearInterval: 1000 * 60 * 60 // deletes expired sesseions every hour
    })
  };

  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(session(sessionConfig)); ///// ****** */  Step 3. Turns on sessions
};
