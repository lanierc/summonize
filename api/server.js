"use strict";

const express = require("express");
const http = require("http");

const router = express();

const { PORT } = require("./utils/constants");

const middleWare = require("./middleware");

const { applyMiddleware } = require("./utils");

const { router: summonerRouter } = require("./routes/summonerRoutes");
const { router: matchRouter } = require("./routes/matchRoutes");

applyMiddleware(middleWare, router);

router.use("/api/summoners", summonerRouter);

router.use("/api/matches", matchRouter);

const server = http.createServer(router);

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
