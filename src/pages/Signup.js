import { useState } from "react";
// import Cookies from "js-cookie";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({ handleToken }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const navigate = useNavigate();

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://marvel-backend-deploy.herokuapp.com/user/signup",
        {
          username: name,
          email: email,
          password: password,
          newsletter: newsletter,
        }
      );

      console.log(response.data);
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          name="name"
          value={name}
          onChange={handleNameChange}
        />

        <br />

        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <br />

        <input
          type="checkbox"
          onClick={() => {
            setNewsletter(!newsletter);
          }}
        />
        <span>S'incrire à notre newsletter</span>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Marvel. Je confirme
          avoir au moin 18ans
        </p>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Signup;
