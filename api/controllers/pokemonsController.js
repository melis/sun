const mongoose = require("mongoose");

const HttpError = require("../models/http-error");

const Pokemon = require("../models/pokemon");

//---------------------
const getPokemons = async (req, res, next) => {
  let pokemons = [];

  try {
    pokemons = await Pokemon.find();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a product.",
      500
    );
    return next(error);
  }

  res.json({ pokemons });
};

//--------------------------
const getPokemonById = async (req, res, next) => {
  const { pid } = req.params;
  if (!pid) {
    const error = new HttpError(
      "Could not find product for the provided id.",
      404
    );
    return next(error);
  }

  let pokemon;
  try {
    pokemon = await Pokemon.findById(pid);
  } catch (err) {
    const error = new HttpError("Something went wrong", 500);
    return next(error);
  }

  res.json({ pokemon });
};

const createPokemon = async (req, res, next) => {
  const { name, description, image } = req.body;

  const createdPokemon = new Pokemon({
    name,
    description,
    image,
  });

  try {
    await createdPokemon.save();
  } catch (err) {
    const error = new HttpError(
      "Creating product failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ createdPokemon });
};
//-----------------------

const deletePokemon = async (req, res, next) => {
  const { pid } = req.params;

  let pokemon;
  try {
    pokemon = await Pokemon.findById(pid);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete product.",
      500
    );
    return next(error);
  }

  if (!product) {
    const error = new HttpError("Could not find product for this id.", 404);
    return next(error);
  }

  try {
    await pokemon.remove();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete product.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Deleted pokemon" });
};

exports.getPokemonById = getPokemonById;
exports.createPokemon = createPokemon;
exports.deletePokemon = deletePokemon;
exports.getPokemons = getPokemons;
