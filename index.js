const server = require("./API/server.js");

const port = process.env.PORT || 6000;

server.isten(port, () => {
  console.log(`\n ** Listening on port ${port} ** \n`);
});
