import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import axios from "axios";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backend-deploy.herokuapp.com/comics`
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
    <div>
      <center>
        <div className="searchBox">
          <i class="fa-solid fa-magnifying-glass fa-2x"></i>

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
          .filter((item) => {
            if (search === item.title[0]) {
              return item;
            } else if (
              item.title.toLowerCase().includes(search.toLocaleLowerCase())
            ) {
              return item;
            }
            return false;
          })
          .map((item, index) => {
            console.log(item);
            return (
              <div className="characters" key={index}>
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
    </div>
  );
};

export default Comics;
