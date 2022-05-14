// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// import axios from "axios";

const Favorite = ({ favorite }) => {
  return (
    <div>
      {favorite.map((character, index) => {
        console.log(character);
        return (
          <div key={index}>
            <img
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              alt=""
            />
            <h1>{character.name}</h1>
            <p>{character.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Favorite;
