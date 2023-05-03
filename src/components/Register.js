import Card from "react-bootstrap/Card";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  // create state for holding user's name, email, username, password
  const [ user, setUser ] = useState({
    yourName: "",
    email: "",
    username: "",
    password: "",
    id: null
  });

  // state for storing users in array
  const [ newUser, setNewUsers ] = useState([]);

  // helper function used in submit function to check if email is already registered
  const checkEmail = (users) => {
    const user = users.find((user) => user.email === user.email);
    if (user) return user;
  };

  // function when clicking register button
  const handleSubmit = (e) => {
    const name = e.target.value;
    const value = e.target.value;

    // const newUser = await axios
    // .get("/users")
    // .then((res) => checkEmail(res.data, user.email));

    // if (user) {
    //   alert("User alerady exists");
    // } else {
     // const user = {...user};
      // axios.post("/users", user)
      // .then(alert("New user created!"));


    console.log("name: "+name, "value: "+value);
    
    setUser({...user, [name]:value});

    // const user = { ...user };
    // axios.post("/users", user)
    // .then(alert("New user registered!"));
  }

  return (
    <div className="container">
      <Card>
        <form onSubmit={handleSubmit}>
          <h1>Register user</h1>
          <label>
            <input
              type="text"
              placeholder="Name"
              name="yourName"
              value={user.yourName}
              onChange={handleSubmit}
            />
          </label>

          <label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleSubmit}
            />
          </label>

          <label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={user.username}
              onChange={handleSubmit}
            />
          </label>

          <label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleSubmit}
            />
          </label>

          <button
            type="submit"
            
            >Submit
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Register;