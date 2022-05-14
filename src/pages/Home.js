import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const Home = ({ favorite, setFavorite }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  // const [fav, setFav] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-backend-deploy.herokuapp.com/characters"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading === true ? (
    <div>En cours de chargement...</div>
  ) : (
    <>
      <center>
        <div className="searchBox">
          <i className="fa-solid fa-magnifying-glass fa-2x"></i>
          <input
            className="searchingBar"
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      </center>
      <div className="container-characters">
        {data.results
          .filter((characters) => {
            if (search === characters.name[0]) {
              return characters;
            } else if (
              characters.name.toLowerCase().includes(search.toLocaleLowerCase())
            ) {
              return characters;
            }
            return false;
          })
          .map((characters, index) => {
            console.log(characters);
            const id = characters._id;

            return (
              <div key={index}>
                <div className="characters">
                  <button
                    onClick={() => {
                      const tab = [...favorite];
                      tab.push(characters);

                      setFavorite(tab);
                    }}
                  >
                    fav
                  </button>
                  <Link to={`/charactercomics/${id}`}>
                    <img
                      src={
                        characters.thumbnail.path +
                        "." +
                        characters.thumbnail.extension
                      }
                      alt=""
                    />
                  </Link>
                  <h1>{characters.name}</h1>
                  <p>{characters.description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Home;
