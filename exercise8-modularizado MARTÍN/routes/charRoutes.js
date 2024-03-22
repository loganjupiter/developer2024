const express = require("express");
const router = express.Router();

//router.get
router.get("/chars", async (req, res) => {
  try {
    const respuesta = await fetch("https://rickandmortyapi.com/api/character");
    const personajes = await respuesta.json();
    res.send(personajes);
  } catch (error) {
    console.log("Ocurrió un error en el fetch", error);
  }
});

router.get("/chars/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const respuesta = await fetch(
      `https://rickandmortyapi.com/api/character/${id}.`
    );
    const personaje = await respuesta.json();
    res.send(personaje);
  } catch (error) {
    console.log("Ocurrió un error en el fetch", error);
  }
});

module.exports = router;
