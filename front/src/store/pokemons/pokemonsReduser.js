const initialState = {
  pokemons: [
    {
      _id: 1,
      name: "n",
      description: "dsdas",
      image:
        "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_727,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210226041421-02-pokemon-anniversary-design.jpg",
    },
  ],
  loading: false,
  addLoading: false,
};

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return {
        pokemons: action.pokemons,
        loading: false,
      };
    case "DELL_POKEMON":
      return {
        ...state,
        pokemons: state.pokemons.filter((el) => el._id !== action.id),
      };
    case "ADD_POKEMON":
      return {
        ...state,
        pokemons: [...state.pokemons, action.pokemon],
        addLoading: false,
      };
    case "SET_LOADING":
      return { ...state, loading: action.loading };
    case "SET_ADD_LOADING":
      return { ...state, addLoading: action.addLoading };
    case "FOV_POKEMON":
      return {
        ...state,
        pokemons: state.pokemons.map((el) => {
          if (el._id === action.pokemon._id) return action.pokemon;
          return el;
        }),
      };
    default:
      return state;
  }
};

export default pokemons;
