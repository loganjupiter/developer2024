const express = require("express");
const app = express();
const port = 3000;
const events = require("./eventsDb");

app.use(express.json());

app.get("/events", (req, res) => {
  res.send(JSON.stringify(events));
});

// app.get("/events/:id", (req, res) => {
//   const reqId = req.params.id;
//   for (let i = 0; i < events.length; i++) {
//     const event = events[i];
//     if (Number(event.id) === Number(reqId)) {
//       res.send(JSON.stringify(event));
//     }
//   }
//   res.send(JSON.stringify(events));
// });

app.get("/events/:id", (req, res) => {
  const reqId = req.params.id;
  const newEvent = events.find((event) => event.id == reqId);
  if (newEvent) {
    res.send(newEvent);
  } else {
    res.json({ message: "Evento no encontrado" });
  }
});

app.post("/events", (req, res) => {
  const idP = req.query.id;

  const newEvent = {
    id: req.body.id,
    name: req.body.name,
    date: req.body.date,
    description: req.body.description,
  };
  if (events.find((event) => event.id != idP)) {
    events.push(newEvent);
    res.send(newEvent);
  } else {
    res.json({ message: "El eventro coincide con otro ya creado" });
  }
});

app.listen(port, () => {
  console.log(`Escuchando al servidor http://localhost:${port}/events`);
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
