const express = require("express");
require('dotenv').config();
const pRouter = require("./router");
const server = express();
const port = process.env.port || 5000 ;

server.use(express.json());
server.use(pRouter);

server.get("/", (req, res) => {
  res.json({
    message: "Welcome User",
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
