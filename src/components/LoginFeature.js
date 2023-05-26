import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MdArrowCircleLeft } from "react-icons/md";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Header from "./Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // state and function for disabled status of start game button
  const [ disabled, setDisabled ] = useState(true);

  const handleDisable = () => {
    setDisabled(false);
  };

  let navigate = useNavigate();

  // 1. kolla både email och password i databasen så att det stämmer
  // 2. Logga ut värdet för att dubbellkolla så det blir rätt
  // 3. Om det blir rätt returnera user
  const checkEmail = (users) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log(user);
    if (user.email === email && user.password === password) return user;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      // kollar om email eller password fältet är tomt
      alert("All fields are required!");
      // om villkoret stämmer visa alert
    }
    // kolla om det finns en user med samma epost
    // vi behöver skriva en funktion för att göra en check

    const user = await axios
      .get("http://localhost:6001/users")
      .then((res) => checkEmail(res.data, email))
      .catch((error) => {
        console.log("Error");
      });

    //console.log(user);
    //console.log(user.email);

    if (user.email === email && user.password === password) {
      alert("Success!");
      handleDisable();

      // om login success ska vi spara user i localstorage
      localStorage.setItem("currentUser", user.username);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className="login-header">
        <Header>
          <Link to="/">
            <MdArrowCircleLeft className="left-arrow"/>
          </Link>
        </Header>
      </div>

      <div className="container">
        <Card className="custom-card">
          <Form>
            <h1>Log In</h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  value={email}
                  placeholder="Email"
                />
              </Form.Label>
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                <Form.Control
                  onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  value={password}
                  placeholder="Password"
                />
              </Form.Label>
            </Form.Group>
            <button
              className="sm-btn"
              type="submit"
              onClick={handleSubmit}
              >Continue
            </button>
          </Form>
        </Card>

        <div className="container">
          <button 
            className="lg-btn"
            disabled={disabled}
            onClick={() => {
              navigate("/menu")
            }}
          >Start Game
          </button>
        </div>
        
        <div className="to-reg-container">
          <p>Don't have an account?</p>
          <button 
            className="sm-btn"
            onClick={() => {
              navigate("/register")
            }}
          >Sign Up
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;