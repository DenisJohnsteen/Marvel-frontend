import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import axios from "axios";

const CharacterComics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backend-deploy.herokuapp.com/comics/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading === true ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      {data.comics.map((item, index) => {
        console.log(item);
        return (
          <div key={index}>
            <img
              src={item.thumbnail.path + "." + item.thumbnail.extension}
              alt=""
            />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterComics;
