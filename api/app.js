const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const pokemonRoutes = require("./routes/pokemon-routes");

const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT"
  );
  console.log("api");
  next();
});

app.use("/api/pokemons", pokemonRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

const PORT = process.env.PORT || 5000;
mongoose
  .connect(
    `mongodb+srv://melis:805087@cluster0.dmff2.mongodb.net/sun?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    app.listen(PORT);
    console.log("Server start on port", PORT);
  })
  .catch((err) => {
    console.log("error", err);
  });
