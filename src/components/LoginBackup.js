import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginBackup = () => {
  // states for storing username, pw
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  // hook to route to main menu
  const navigate = useNavigate();

  // check input data against db to see if we can find
  // a user with matching email and pw
  const checkUser = (users) => {
    const user = users.find(
      (user) => user.username === username && user.password === password);
      //console.log(user);
      if (users) {
        return user;
      }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      alert("All fields are required");
    }

    let user = await axios
      .get("/users")
      .then((res) => checkUser(res.data))
      .catch((error) => {
        console.log(error);
      });

    // if successful login redirect to main menu
    if (user) {
      // set user in localStorage if login successful
      // use user to go to private route
      localStorage.setItem("currentUser", user.username);
      navigate("/mainmenu");
      console.log(user);
    } else {
      alert("Incorrect username or password");
    }

    setUsername("");
    setPassword("");
  };

  return (
    <div className="container">
      <Card>
        <Form>
          <h1>Log In</h1>
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

          <Button
            type="submit"
            onClick={handleSubmit}
            >Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default LoginBackup;