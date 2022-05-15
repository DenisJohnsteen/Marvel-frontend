import { Link, useNavigate } from "react-router-dom";
import backgroundmarvel from "../assets/images/backgroundmarvel.jpg";

const Header = ({ token, handleToken }) => {
  const navigate = useNavigate();
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
            {token === null ? (
              <>
                <Link to="/login">
                  <button>SIGN IN</button>
                </Link>
                <button>|</button>
                <Link to="/signup">
                  <button>JOIN</button>{" "}
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  handleToken(null);
                  navigate("/");
                }}
              >
                DISCONNECT
              </button>
            )}
          </div>
        </nav>
      </header>

      <center>
        <div className="anview-logo">
          <span>WELCOME</span>
          <br />
          <span>&nbsp;&nbsp;TO</span>
          <br />
          <span>DENIS'S</span>
          <br />
          <span>API</span>
          <br />
          <span>MARVEL</span>
        </div>
      </center>

      <section className="background-img">
        <img src={backgroundmarvel} alt="" />
      </section>
    </div>
  );
};

export default Header;
