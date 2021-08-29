import axios from "axios";

export const getPokemons = () => {
  return (dispatch) => {
    dispatch({ type: "SET_LOADING", loading: true });
    axios
      .get("/api/pokemons")
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
      .post("/api/pokemons", pokemon)
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

export const dellPokemon = (id) => {
  return (dispatch) => {
    axios.delete(`/api/pokemons/${id}`).then((a) => {
      console.log(a.data);
      dispatch({ type: "DELL_POKEMON", id });
    });
  };
};

export const fovPokemon = (id, index) => {
  return (dispatch) => {
    axios.put(`/api/pokemons/${id}`).then((a) => {
      const { pokemon } = a.data;
      dispatch({ type: "FOV_POKEMON", pokemon });
    });
  };
};
