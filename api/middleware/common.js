const bodyParser = require("body-parser");
const cors = require("cors");

exports.handleBodyRequestParsing = router => {
  router.use(bodyParser.urlencoded({ extended: true }));
  router.use(bodyParser.json());
};

// const whiteList = [
//   "http://localhost",
//   "http://localhost",
//   "https://summonize.coreylanier.com"
// ];

// const corsOptions = {
//   origin: function(origin, callback) {
//     if (whiteList.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   }
// };

exports.handleCors = router => {
  router.use(cors());
};
