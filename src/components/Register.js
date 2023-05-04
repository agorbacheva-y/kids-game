import Card from "react-bootstrap/Card";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  // create states for holding user's name, email, username, password
  const [ myName, setMyName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  // helper function used in submit function to check if email is already registered
  const checkEmail = (users) => {
    const user = users.find((user) => user.email === email);
    if (user) return user;
  };

  // function when submitting register form
  const handleSubmit = async () => {
    const user = await axios
      .get("/users") //get users from database
      .then((res) => checkEmail(res.data, email)); //check from results if email already exists

    if (user) {
      alert("User alerady exists");
    } else {
      const user = { myName, email, username, password };
      console.log(user);
      axios.post("/users", user)
        .then(alert("New user created!"));
      
    }
  };

  return (
    <div className="container">
      <Card>
        <form onSubmit={handleSubmit}>
          <h1>Register User</h1>
          <label>
            <input
              type="text"
              placeholder="Name"
              value={myName}
              onChange={(e) => setMyName(e.target.value)}
            />
          </label>

          <label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button
            type="submit"
            // onClick={handleSubmit}
            >Submit
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Register;