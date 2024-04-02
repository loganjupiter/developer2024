const express = require("express");
const router = express.Router();

//router.get
router.get("/chars", async (req, res) => {
  try {
    const respuesta = await fetch("https://rickandmortyapi.com/api/episode");
    const episode = await respuesta.json();
    res.send(episode);
  } catch (error) {
    console.log("Ocurrió un error en el fetch", error);
  }
});

router.get("/episode/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const respuest = await fetch(
      `https://rickandmortyapi.com/api/episode/${id}.`
    );
    const episodes = await respuest.json();
    res.send(episodes);
  } catch (error) {
    console.log("Ocurrió un error en el fetch", error);
  }
});

module.exports = router;
