const express = require("express");
const router = express.Router();
const eventRoutes = require("./eventRoutes");

router.use(eventRoutes);

module.exports = router;
