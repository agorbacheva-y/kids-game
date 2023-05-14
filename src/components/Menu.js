import React from "react";
import ReusableButton from "./ReusableButton";
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from "react-router-dom";

const Menu = () => {
    return (
     <div className="container"> 
    
         <Link to="/"> <CloseButton className="closebtn"></CloseButton> </Link>
    
        <h1>Choose a Game</h1>
        <ReusableButton>Body Parts</ReusableButton>
      <ReusableButton>Find objects</ReusableButton>
      <ReusableButton>Drag & drop</ReusableButton>
     </div>
    );
};

export default Menu;