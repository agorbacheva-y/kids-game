import React from "react";
import ReusableButton from "./ReusableButton";
import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className="closebtn-container">
            <CloseButton onClick={() => navigate("/")} className="closebtn"></CloseButton> 
        </div>
        
        <div className="container"> 
            <h1>Choose a Game</h1>
            <ReusableButton 
                className="menulink"
                onClick={() => navigate("/bodypartgame")}
            >
                Body Part Game
            </ReusableButton>
            <ReusableButton 
                className="menulink"
                onClick={() => navigate("/findobjectsgame")}
            >
                Find Objects
            </ReusableButton>
            <ReusableButton
                className="menulink"
                onClick={() => navigate("/dragndropgame")}
            >
                Drag & Drop       
            </ReusableButton>
        </div>
        </>
    );
};

export default Menu;

// When the games are done link to it in each button