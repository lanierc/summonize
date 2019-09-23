"use strict";

const express = require("express");
const http = require("http");

const router = express();

const { PORT } = require("./utils/constants");

const middleWare = require("./middleware");

const { applyMiddleware } = require("./utils");

const { router: summonerRouter } = require("./routes/summonerRoutes");

applyMiddleware(middleWare, router);

router.use("/api/summoners", summonerRouter);

const server = http.createServer(router);

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
