import "./App.css";
import mongoose from "mongoose";
import { useEffect } from "react";
// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;
// const PokemonSchema = new Schema({
//   name: { type: String, required: true },
//   dest: { type: String, required: true },
// });
// const Pokemon = mongoose.model("Categories", PokemonSchema);

// console.log(mongoose.Schema);

function App() {
  useEffect(() => {
    mongoose
      .connect(`mongodb+srv://melis:805087@cluster0.dmff2.mongodb.net/sun`)
      .then(() => {
        console.log("ok");
      });
  }, []);
  return (
    <div className="App">
      <button>Test</button>
    </div>
  );
}

export default App;
