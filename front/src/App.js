import "./App.css";

import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App container">
      <div className="bg-white rounded shadow border p-6 w-64">
        <img
          alt=""
          src="https://i.pinimg.com/originals/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.png"
        />
        <h5 className="text-3xl font-bold mb-4 mt-0">Pokemon name</h5>
        <p className="text-gray-700 text-sm">Pokemon description</p>
        <button>
          <img
            alt=""
            src="https://image.flaticon.com/icons/png/512/263/263417.png"
            width="30px"
          />
        </button>
        <button>
          <img
            alt=""
            src="https://image.flaticon.com/icons/png/512/3221/3221897.png"
            width="30px"
          />
        </button>
      </div>

      <Form />
    </div>
  );
}

export default App;
