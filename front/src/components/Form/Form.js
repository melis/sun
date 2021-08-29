import React from "react";
import axios from "axios";

const Form = () => {
  return (
    <div>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Pokemon name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Pokemon description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3"
              id="pokeon desc"
              type="text"
              placeholder="Pokemon desc"
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
              id="desc"
              type="text"
              placeholder="Pokemon desc"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={() => {
                console.log("Add");
                console.log(process.env);
                axios
                  .post("/api/pokemons", {
                    name: "Test",
                    description: "TestTest",
                    image: "testUrl",
                  })
                  .then((a) => console.log(a))
                  .catch((e) => console.log(e));
              }}
            >
              Post pok
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
