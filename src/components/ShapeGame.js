import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ShapeGame = () => {

    return (
      <div className="container"> 
        <h1>Shape Game</h1>
        <p>You have 10 seconds to find an object that 
            is similar to the object that is displayed on the screen in your home.
        </p>
        <p>Start the timer when you are ready!</p>
        <Button size="lg">
            Start Timer
         </Button>
      </div>
     
    );
};

export default ShapeGame;

// link to start the timer