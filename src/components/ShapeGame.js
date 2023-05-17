import { useState, useRef } from "react";
import css from "./shapeGame.css"
import Button from "react-bootstrap/Button";
import yellowStar from "./shapesImg/yellowStar.png";
import orangeCircle from "./shapesImg/orangeCircle.png"
import bluePentagon from "./shapesImg/BluePentagon.png"
import redTriangle from "./shapesImg/redTriangle.png"
import blueRectangle from "./shapesImg/blueRectangle.png"




/**
 1. se till att kunna slumpa fram en random bild tex när man klickar på en knapp

 2. steg två är att se till att en bild visas så länge timern körs men när den är slut ska bilden inte visas.
 Testa med bara en bild så du vet att det funkar. När det funkar då gör du så att din array blir elementet/bilden som visas eller inte

 3. steg 3 är att se till att slumpa fram en random bild från arrayen, se till att den random bilden visas så länge timern körs
 när timern är slut ska bilden inte visas istället ska en ny bild slumpas fram.
 */

const ShapeGame = () => {
  // this is the timer function
  const [timer, setTimer] = useState(0);
  const Ref = useRef();

  function getTimerRemaining(e) {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);

    return { total, seconds };
  }
  function startTimer(e) {
    let { total, seconds } = getTimerRemaining(e);
    if (total >= 0) {
      setTimer(seconds > 1 ? seconds : "0" + seconds);
    }
  }
  // timer starts

  function clearTimer(e) {
    setTimer("0");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 10);
    Ref.current = id;
    // starts with 0 when refreshed or at the start
  }

  function getDeadTime() {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 15);
    return deadline;
  }
  // timer starts at 15 and counts down to 0

  function Reset() {
    clearTimer(getDeadTime());
  }

  // array for storing the shape images
  const shapeImages = [
    yellowStar, orangeCircle,
    bluePentagon, blueRectangle,
    redTriangle
  ];
   
  // here is thw state variable that displays the current image
  const [currentImg, setCurrentImg] = useState("");
 
// here an random img from thw array and currentimg selects
function Reset() {
  clearTimer(getDeadTime());
  const randomIndex = Math.floor(Math.random() * shapeImages.length);
  setCurrentImg(shapeImages[randomIndex]);
};

  // game information desplayed here
  return (
    <div className="container">
      <h1>Shape Game</h1>
      <p>
        You have 15 seconds to find an object that is similar <br /> to the
        object that is displayed on the screen in your home.
      </p>

      <img src={currentImg} className="shapeimg" alt="star"/>


      <h5>Start the timer when you are ready!</h5>
      <h2>{timer}</h2>

      <Button className="btn" size="lg" onClick={Reset}>
        Start Timer
      </Button>
    </div>
  );
};

export default ShapeGame;
