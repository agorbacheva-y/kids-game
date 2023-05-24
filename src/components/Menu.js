import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
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


   
            <ReusableButton 
                className="menulink"
                onClick={() => navigate("/bodypartgame")}
            >
                Body Part Game

            </ReusableButton>

            <ReusableButton 
                className="menulink"
                onClick={() => navigate("/shapegame")}
            >
                Find Objects
            </ReusableButton>


            <InfoForParents></InfoForParents>
          
        </div>

        </>
    );
};

export default Menu;

// When the games are done link to it in each button