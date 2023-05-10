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
    //e.stopPropagation();

    // helper function used in submit function to check if email is already registered
    //let user = {};
  
    const checkEmail = (users) => {
    newUser = users.find((newUser) => newUser.email === newUser.email);
    if (users) return newUser;
    };

    newUser = await axios
      .get("/users") //get users from database
      .then((res) => checkEmail(res.data)) //check from results if email already exists
      .catch((error) => {
        console.log(error);
      });

    if (newUser) {
      alert("User alerady exists");
    } else if (newUser.myName === "" || newUser.email === "" || newUser.username === "" || newUser.password === "") {
      alert("All fields are required");
    } else {
      const user = { ...newUser };
      console.log(user);
      axios.post("/users", user)
        .then(alert("New user created!"));
    }

    // !! clear form not working...
    setNewUser({ myName:"", email:"", username:"", password:"" });

    setNewUser({});
  };

  return (
    <div className="container">
      <RegisterForm newUser={newUser} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  );
};

export default Register;

// need to fix how to clear input fields after submitting