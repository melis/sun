const initialState = {
  pokemons: [
    {
      id: 1,
      name: "n",
      description: "dsdas",
      image:
        "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_727,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210226041421-02-pokemon-anniversary-design.jpg",
    },
  ],
  loading: false,
};

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return {
        pokemons: action.pokemons,
        loading: false,
      };
    case "SET_LOADING":
      return { ...state, loading: action.loading };

    default:
      return state;
  }
};

export default pokemons;
