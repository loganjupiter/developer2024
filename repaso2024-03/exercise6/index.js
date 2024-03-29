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
    id: req.query.id,
    name: req.query.name,
    date: req.query.date,
    description: req.query.description,
  };
  if (events.find((event) => event.id != idPvv)) {
    events.push(newEvent);
    res.send(newEvent);
  } else {
    res.json({ message: "Evento no encontrado" });
  }
});



app.listen(port, () => {
  console.log(`Escuchando al servidor http://localhost:${port}/events`);
});
