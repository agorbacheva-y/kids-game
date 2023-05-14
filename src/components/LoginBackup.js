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

  // hook to route back to main mage
  const navigate = useNavigate();

  // check input data against db to see if we can find
  // a user with matching email and pw
  const checkUser = (users) => {
    const user = users.find(
      (user) => user.username === username && user.password === password);
      console.log(user);
      if (users) return user;
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

    // if successful login redirect to game page
    if (user.username === username && user.password === password) {
      navigate("/bodypartgame");
    }

    // set user in localStorage if login successful
    // use user to go to private route
    localStorage.setItem("user", JSON.stringify(user.id));

    setUsername("");
    setPassword("");
  };

  return (
    <div className="container">
      <Card>
        <Form>
          <h1>Register User</h1>
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

      <Button size="lg">
          <Link to="/mainmenu" className="btn">Start Game</Link>
      </Button>
    </div>
  );
};

export default LoginBackup;

// add function for when user is not registered or username/pw incorrect