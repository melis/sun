import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card/Card";
import axios from "axios";
import Form from "./components/Form/Form";
import { getPokemons } from "./store/pokemons/pokemonsAction";

function App() {
  const dispatch = useDispatch();
  const { pokemons, loading } = useSelector((a) => a.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  if (loading) return <div>loading...</div>;

  return (
    <div className="App container">
      <button
        onClick={() => {
          axios
            .get("http://localhost:5000/api/pokemons")
            .then(({ data }) => console.log(data));
        }}
      >
        TEst
      </button>
      {pokemons.map((el) => (
        <Card
          id={el._id}
          name={el.name}
          description={el.description}
          image={el.image}
          fov={el.fov}
          key={el._id}
        />
      ))}
      <Form />
    </div>
  );
}

export default App;
