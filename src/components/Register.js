import { useState } from "react";
import axios from "axios";
import RegisterForm from "./RegisterForm";

const Register = () => {
  // create states for holding user's name, email, username, password
  const [ newUser, setNewUser ] = useState({
    myName: "",
    email: "",
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // console.log("name: " + name, "value: " + value);

    setNewUser({ ...newUser, [name]:value })
  }

  // function when submitting register form
  const handleSubmit = async (e) => {
    e.preventDefault();

      // helper function used in submit function to check if email is already registered
      let user = {};
    
      const checkEmail = (users) => {
      user = users.find((user) => user.email === newUser.email);
      if (users) return user;
    };

    if (newUser.myName === "" || newUser.email === "" || newUser.username === "" || newUser.password === "") {
      alert("All fields are required");
      return user;
    }

    user = await axios
      .get("/users") //get users from database
      .then((res) => checkEmail(res.data)) //check from results if email already exists
      .catch((error) => {
        console.log(error);
      });

    if (user) {
      alert("User alerady exists");
    } else {
      const user = { ...newUser };
      console.log(user);
      axios.post("/users", user)
        .then(alert("New user created!"));
    }

    setNewUser({ myName:"", email:"", username:"", password:"" });
  };

  return (
    <div className="container">
      <RegisterForm newUser={newUser} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  );
};

export default Register;

// need to fix how to clear input fields after submitting