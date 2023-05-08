import { useState } from "react";
import axios from "axios";
import RegisterForm from "./RegisterForm";

const Register = () => {
  // create states for holding user's name, email, username, password
  const [ myName, setMyName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  // helper function used in submit function to check if email is already registered
  const checkEmail = (users) => {
    const user = users.find((user) => user.email === email);
    if (users) return user;
  };

  // function when submitting register form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (myName === "" || email === "" || username === "" || password === "") {
      alert("All fields are required");
      return user;
    }

    let user = await axios
      .get("/users") //get users from database
      .then((res) => checkEmail(res.data)) //check from results if email already exists
      .catch((error) => {
        console.log(error);
      });

    if (user) {
      alert("User alerady exists");
    } else {
      const user = { myName, email, username, password };
      console.log(user);
      axios.post("/users", user)
        .then(alert("New user created!"));
    }

    setMyName("");
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container">
      <RegisterForm myName={myName} email={email} username={username} password={password} />
    </div>
  );
};

export default Register;