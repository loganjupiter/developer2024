const express = require("express");
const app = express();
const port = 3000;
const eventsDb = require("./eventsDb");

// Middleware para parsear JSON
app.use(express.json());

// Obtener todos los eventos
app.get("/events", (req, res) => {
  res.json(eventsDb);
});

// Crear un nuevo evento
app.post("/events", (req, res) => {
  const newEvent = req.body;
  eventsDb.push(newEvent);
  res.json({ massage: "Se creo un nuevo evento", status: 201 });
});

// Actualizar un evento existente
app.patch("/events/:id", (req, res) => {
  const eventId = req.query.id;
  const updatedEvent = req.body;
  const index = eventsDb.findIndex((event) => event.id === eventId);
  if (index !== -1) {
    eventsDb[index] = updatedEvent;
    res.json(updatedEvent);
  } else {
    res.status(404).json({ message: "Evento no encontrado" });
  }
});

// Borrar un evento
app.delete("/events/:id", (req, res) => {
  const eventId = parseInt(req.query.id);
  const index = eventsDb.findIndex((event) => event.id === eventId);
  if (index !== -1) {
    const deletedEvent = eventsDb.splice(index, 1);
    res.json(deletedEvent[0]);
  } else {
    res.status(404).json({ message: "Evento no encontrado" });
  }
});

app.listen(3000, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
