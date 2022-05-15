import "./App.css";
import "./test.scss";
// import { useState } from "react";
import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import backgroundmarvel from "./assets/images/backgroundmarvel.jpg";
import { useState } from "react";

//IMPORTS DES COMPOSANTS
import Header from "./components/Header";

//IMPORTS DES PAGES
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import CharacterComics from "./pages/CharacterComics";
import Favorite from "./pages/Favorite";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [favorite, setFavorite] = useState([] || Cookies.get("favorite"));
  Cookies.set("favorite", favorite, { expires: 3 });

  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const handleToken = (token) => {
    if (token) {
      //action de connection
      Cookies.set("userToken", token);
    } else {
      //action de deconnection
      Cookies.remove("userToken");
    }
    setToken(token);
  };

  return (
    <Router>
      <Header token={token} handleToken={handleToken} />
      <Routes>
        <Route
          path="/"
          element={<Home favorite={favorite} setFavorite={setFavorite} />}
        />
        <Route path="/comics/" element={<Comics />} />
        <Route path="/charactercomics/:id" element={<CharacterComics />} />
        <Route path="/favorite" element={<Favorite favorite={favorite} />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
      </Routes>
    </Router>
  );
}
export default App;
