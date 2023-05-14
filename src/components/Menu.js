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
            <Link to="bodypartsgame">Body Parts </Link>
        </ReusableButton>
        <ReusableButton>
             <Link to="findobjectsgame">Find Objects </Link>
        </ReusableButton>
        <ReusableButton>
           <Link to="dragndropgame">Drag & Drop </Link>        
      </ReusableButton>
     </div>
    );
};

export default Menu;

// When the games are done link to it in each button