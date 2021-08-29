const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  fov: { type: Boolean, required: false },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
