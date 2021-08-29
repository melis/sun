import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon } from "../../store/pokemons/pokemonsAction";

const Form = () => {
  const dispatch = useDispatch();
  const { addLoading } = useSelector((a) => a.pokemons);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handlSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPokemon({
        name,
        description,
        image: imageUrl,
      })
    );
    setName("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handlSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Pokemon name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="desc"
          >
            Pokemon description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3"
            id="desc"
            type="text"
            placeholder="Pokemon desc"
            value={description}
            onChange={(e) => {
              setDescription(e.currentTarget.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="url"
          >
            Pokemon image URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="url"
            type="text"
            placeholder="image Url"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.currentTarget.value);
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded button"
            disabled={addLoading || !imageUrl || !name || !description}
            type="submit"
          >
            Add pokemon
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
