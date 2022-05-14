import "./App.css";
// import { useState } from "react";
// import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import backgroundmarvel from "./assets/images/backgroundmarvel.jpg";

//IMPORTS DES COMPOSANTS
import Header from "./components/Header";

//IMPORTS DES PAGES
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import CharacterComics from "./pages/CharacterComics";
import Favorite from "./pages/Favorite";
import { useState } from "react";

function App() {
  const [favorite, setFavorite] = useState([]);
  // Cookies.set("favorite", "favorite");

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home favorite={favorite} setFavorite={setFavorite} />}
        />
        <Route path="/comics/" element={<Comics />} />
        <Route path="/charactercomics/:id" element={<CharacterComics />} />
        <Route path="/favorite" element={<Favorite favorite={favorite} />} />
      </Routes>
    </Router>
  );
}
export default App;
