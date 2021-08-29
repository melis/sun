import axios from "axios";

export const getPokemons = () => {
  return (dispatch) => {
    dispatch({ type: "SET_LOADING", loading: true });
    axios
      .get("http://localhost:5000/api/pokemons")
      .then((a) => {
        const { pokemons } = a.data;
        console.log(a.data.pokemons);
        dispatch({ type: "SET_POKEMONS", pokemons });
      })
      .catch((e) => {
        dispatch({ type: "SET_LOADING", loading: false });
      });
  };
};

export const addPokemon = (pokemon) => {
  return (dispatch) => {
    dispatch({ type: "SET_ADD_LOADING", addLoading: true });
    axios
      .post("http://localhost:5000/api/pokemons", pokemon)
      .then((a) => {
        const { createdPokemon } = a.data;
        dispatch({ type: "ADD_POKEMON", pokemon: createdPokemon });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: "SET_ADD_LOADING", addLoading: false });
      });
  };
};
