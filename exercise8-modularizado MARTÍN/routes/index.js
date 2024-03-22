const express = require("express");
const router = express.Router();

const charRoutes = require("./charRoutes.js");
const userRoutes = require("./locationRoutes.js");
const locationRoutes = require("./episodeRoutes.js");

router.use(charRoutes);

//importar los archivos de las rutas
// router.use(archivoDeRutas)

module.exports = router;
