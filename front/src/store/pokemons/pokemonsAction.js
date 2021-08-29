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
        // dispatch({
        //   type: "SET_POKEMONS",
        //   pokemons: [
        //     {
        //       id: 2,
        //       name: "Test",
        //       description: "sdsadasdsadasdasd",
        //       image:
        //         "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_727,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210226041521-03-pokemon-anniversary-design.jpg",
        //     },
        //     {
        //       id: 3,
        //       name: "Test",
        //       description: "sdsadasdsadasdasd",
        //       image:
        //         "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_727,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210226041521-03-pokemon-anniversary-design.jpg",
        //     },
        //     {
        //       id: 4,
        //       name: "Test",
        //       description: "sdsadasdsadasdasd",
        //       image:
        //         "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_727,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210226041521-03-pokemon-anniversary-design.jpg",
        //     },
        //   ],
        // });
      });
  };
};

// blogApi.getArticles(page, token).then((a) => {
//   if (a.error) {
//     dispatch({ type: 'SET_ERROR', error: a.error });
//   } else {
//     dispatch({
//       type: 'SET_ARTICLES',
//       articles: a.articles,
//       total: a.articlesCount,
//       page,
//     });
//   }
// });
