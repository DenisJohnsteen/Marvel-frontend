import { Link } from "react-router-dom";
import iron from "../assets/images/iron.jpg";
import hulkvsiron from "../assets/images/hulkvsiron.webp";

const Header = () => {
  // const navigate = useNavigate();
  return (
    <div className="container-header">
      <header>
        <div className="part1">
          <center>
            <img
              src="https://lereacteur-marvel-api.netlify.app/static/media/logo.ad6c786b.svg"
              alt=""
            />
          </center>
        </div>

        <nav>
          <div className="first-nav">
            <Link to="/">
              <button>Characters</button>
            </Link>
            <Link to="/comics">
              <button>Comics</button>
            </Link>

            <Link to={`/favorite`}>
              <button>Favorite</button>
            </Link>
          </div>
          <div className="signup-join">
            <button>SIGN IN</button>
            <button>|</button>
            <button>JOIN</button>
          </div>
        </nav>
      </header>
      <section className="backgound-img">
        <img src={iron} alt="" />
        <img src={hulkvsiron} alt="" />
      </section>
    </div>
  );
};

export default Header;
