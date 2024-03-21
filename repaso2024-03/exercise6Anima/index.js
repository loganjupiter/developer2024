const db = require("./eventosDb");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/events", function (req, res) {
  res.send(JSON.stringify(db));
});

app.get("/events/:id", (req, res) => {
  const idP = req.params.id;
  const newEv = db.find((event) => event.id === idP);

  res.send("Eventos: " + JSON.stringify(newEv));
});

app.post("/events", (req, res) => {
  const newEvent = {
    id: Number(req.body.id),
    name: req.body.name,
    date: req.body.date,
    description: req.body.description,
  };
  if (db.find((event) => event.id != newEvent.id)) {
    db.push(newEvent);
    res.json({ message: "Se pudo je", status: 200 });
  } else {
    res.json({ message: "Un evento con este ID ya existe crack", status: 400 });
  }
});

app.patch("/events/:id", (req, res) => {
  const idP = req.params.id;
  const event = db.find((event) => event.id == idP);

  if (!event) {
    res.status(404).json({ message: "El evento no existe" });
  } else {
    const body = req.body;

    if (body.name) {
      event.date = body.date;
    }

    if (body.date) {
      event.date = body.date;
    }

    if (body.description) {
      event.description = body.description;
    }

    res.status(200).json({ message: "Evento actualizado" });
  }
});

app.delete("/events/:id", (req, res) => {
  const idP = req.params.id;

  const eventIndex = db.findIndex((event) => event.id == idP);

  if (eventIndex === -1) {
    res.json({ message: "Evento no encontrado", Status: 404 });
  } else {
    db.splice(eventIndex, 1);
    res.json({ message: "Evento eliminado correctamente", Status: 200 });
  }
});

app.listen(3010);
