import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { MdArrowCircleLeft } from "react-icons/md";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";

const Register = () => {
  // create states for holding user's name, email, username, password
  const [ myName, setMyName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  // state and function for disabled status of start game button
  const [ disabled, setDisabled ] = useState(true);

  const handleDisable = () => {
    setDisabled(false);
  };

  let navigate = useNavigate();

  // helper function used in submit function to check if email is already registered
  const checkEmail = (users) => {
    const user = users.find((user) => user.email === email);
    if (users) return user;
  };

  // function when submitting register form
  const handleSubmit = async (e) => {
    e.preventDefault();

    let user = await axios
      .get("/users") //get users from database
      .then((res) => checkEmail(res.data)) //check from results if email already exists
      .catch((error) => {
        console.log(error.response.data);
      });

    if (myName === "" || email === "" || username === "" || password === "") {
      alert("All fields are required");
      return user;
    } else if (user) {
      alert("User alerady exists");
    } else {
      const user = { myName, email, username, password, id:uuidv4() };
      console.log(user);
      localStorage.setItem("currentUser", user.username);
      axios.post("/users", user)
        .then(alert("New user created!"));
        handleDisable();
    }

    setMyName("");
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <div className="reg-header">
        <Header>
          <Link to="/">
            <MdArrowCircleLeft className="left-arrow"/>
          </Link>
        </Header>
      </div>
      
      
      <div className="container">
        <Card className="custom-card">
          <Form>
            <h1>Sign Up</h1>
            <Form.Group controlId="formBasicName">
              <Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={myName}
                  onChange={(e) => setMyName(e.target.value)}
                />
              </Form.Label>
            </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="formBasicUsername">
                <Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Label>
              </Form.Group>

            <button
              className="sm-btn"
              type="submit"
              onClick={handleSubmit}
              >Submit
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
        
        <div className="to-login-container">
          <p>Already a member?</p>
          <button 
            className="sm-btn"
            onClick={() => {
              navigate("/loginfeature")
            }}
          >Log In
          </button>
        </div>

      </div>
    </div>
  );
};

export default Register;