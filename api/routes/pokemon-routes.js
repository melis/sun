const express = require("express");
const pokemonsController = require("../controllers/pokemonsController");

const router = express.Router();

router.get("/:pid", pokemonsController.getPokemonById);
router.get("/", pokemonsController.getPokemons);
router.post("/", pokemonsController.createPokemon);
router.put("/:pid", pokemonsController.addToFov);
router.delete("/:pid", pokemonsController.deletePokemon);

module.exports = router;
