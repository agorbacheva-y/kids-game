import React from "react";
import ReusableButton from "./ReusableButton";
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from "react-router-dom";

const Menu = () => {
    return (
     <div className="container"> 
    
         <Link to="/"> 
           <CloseButton className="closebtn"></CloseButton> 
         </Link>
         
        <h1>Choose a Game</h1>
        <ReusableButton>
            Body Parts <Link to="bodypartsgame"/>
        </ReusableButton>
        <ReusableButton>
        Find objects <Link to="findobjectgame"/>
        </ReusableButton>
      <ReusableButton>
        Drag & drop <Link to="dragndropgame"/>
        </ReusableButton>
     </div>
    );
};

export default Menu;

// When the games are done link to it in each button