const express = require("express");
const stationController = require("../Controller/stationController");
const router = express.Router();

router.post("/bulkcreate", stationController.bulkCreate);
router.get("/", stationController.getAllStation);
module.exports = router;
