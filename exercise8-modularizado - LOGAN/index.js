require("dotenv").config();
const express = require("express");
const app = express();

const routes = require("./routes");

app.use(routes);

app.listen(process.env.APP_PORT, () =>
  console.log(
    `Servidor corriendo en ${process.env.APP_URL}${process.env.APP_PORT}
`
  )
);
