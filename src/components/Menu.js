import React from "react";
import ReusableButton from "./ReusableButton";
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from "react-router-dom";
import InfoForParents from "./InfoForParents";
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

                <div className="menu-container">
                    <button 
                        className="menu-btn"
                        onClick={() => navigate("/bodypartgame")}
                    >
                        Body Part Game
                    </button>
                    <button 
                        className="menu-btn"
                        onClick={() => navigate("/findobjectsgame")}
                    >
                        Find Objects
                    </button>
                    <button
                        className="menu-btn"
                        onClick={() => navigate("/dragndropgame")}
                    >
                        Drag & Drop       
                    </button>
                </div>
            </div>
        </>
    );
};

export default Menu;

// When the games are done link to it in each button