import React from "react";
import { useDispatch } from "react-redux";
import { dellPokemon, fovPokemon } from "../../store/pokemons/pokemonsAction";

const Card = ({ name, description, image, fov = false, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded shadow border p-6 w-64">
      <img alt="" src={image} />
      <h5 className="text-3xl font-bold mb-4 mt-0">{name}</h5>
      <p className="text-gray-700 text-sm">{description}</p>
      <button
        onClick={() => {
          console.log(fov, id);
          dispatch(fovPokemon(id));
        }}
      >
        <img
          alt=""
          src={
            fov
              ? "https://image.flaticon.com/icons/png/512/263/263417.png"
              : "https://image.flaticon.com/icons/png/512/833/833300.png"
          }
          width="30px"
        />
      </button>
      <button
        onClick={() => {
          console.log(id);
          dispatch(dellPokemon(id));
        }}
      >
        <img
          alt=""
          src="https://image.flaticon.com/icons/png/512/3221/3221897.png"
          width="30px"
        />
      </button>
    </div>
  );
};

export default Card;
