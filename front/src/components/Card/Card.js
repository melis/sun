import React from "react";

const Card = ({ name, description, image }) => {
  return (
    <div className="bg-white rounded shadow border p-6 w-64">
      <img alt="" src={image} />
      <h5 className="text-3xl font-bold mb-4 mt-0">{name}</h5>
      <p className="text-gray-700 text-sm">{description}</p>
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
  );
};

export default Card;
