const express = require("express");
const router = express.Router();
const axios = require("axios");
const { KEY: api_key } = require("../utils/constants");

router.route("/").get(async (req, res) => {
  try {
    const { id, perPage: endIndex } = req.query;
    await axios({
      method: "GET",
      url: `https://oc1.api.riotgames.com/lol/match/v4/matchlists/by-account/${id}`,
      params: {
        api_key,
        endIndex
      }
    }).then(result => {
      res.status(200).json({
        ...result.data
      });
    });
  } catch (e) {
    res.status(400);
  }
});

exports.router = router;
