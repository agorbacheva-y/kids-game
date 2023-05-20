import React from "react";
import ReusableButton from "./ReusableButton";
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
        <div className="closebtn-container">
            <Link to="/"> 
                <CloseButton className="closebtn"></CloseButton> 
            </Link>
        </div>
        
        <div className="container"> 
            <h1>Choose a Game</h1>
            <ReusableButton>
                <Link className="menulink" to="/bodypartgame">Body Parts </Link>
            </ReusableButton>
            <ReusableButton>
                <Link className="menulink" to="/shapegame">Find Objects </Link>
            </ReusableButton>
            <ReusableButton>
                <Link className="menulink" to="dragndropgame">Drag & Drop </Link>        
            </ReusableButton>
        </div>
        </>
    );
};

export default Menu;

// When the games are done link to it in each button