import { useState, useRef } from "react";
import { CloseButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import { FcAlarmClock } from "react-icons/fc"
import Modal from "react-bootstrap/Modal";
import yellowStar from "./shapesImg/yellowStar.png";
import orangeCircle from "./shapesImg/orangeCircle.png";
import bluePentagon from "./shapesImg/BluePentagon.png";
import redTriangle from "./shapesImg/redTriangle.png";
import blueRectangle from "./shapesImg/blueRectangle.png";
import ReusableButton from "./ReusableButton"
import Greeting from "./Greeting";

const ShapeGame = () => {
  const currentUser = localStorage.getItem("currentUser")
  const navigate = useNavigate();
  // this is the timer function
  const [timer, setTimer] = useState(0);
  const Ref = useRef();

   // array for storing the shape images
   const shapeImages = [
    yellowStar, orangeCircle,
    bluePentagon, blueRectangle,
    redTriangle
  ];

  function getTimerRemaining(e) {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);

    return { total, seconds };
  }
  function startTimer(e) {
    let { total, seconds } = getTimerRemaining(e);
    if (total >= 0) {
      setTimer(seconds >= 1 ? seconds : "0" + seconds);
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
  } // timer starts at 15 and counts down to 0

   
  // here is thw state variable that displays the current image
  const [currentImg, setCurrentImg] = useState(null);
 
// here an random img from thw array and currentimg selects
function Reset() {
  clearTimer(getDeadTime());
  const randomIndex = Math.floor(Math.random() * shapeImages.length);
  setCurrentImg(shapeImages[randomIndex]);
  
    //message is displayed after the timer reaches 00
    setTimeout(() => {
      setCurrentImg(null) //img disapars when timer is 00
      setShowModal(true);
    }, 15000); // this the 15 seconds in the timer

};

// a modal pops up when the timer hits 00 
 const [showModal, setShowModal] = useState(false)

  // game information desplayed here
  return (
    <>

      {/*Here is the button to go back to home page*/}
      <div className="closebtn-container">
      <CloseButton 
          className="closebtn" 
          onClick={() => navigate("/endgame")}
        />
      </div>
      
      <div className="container">
        <Greeting>Hi {currentUser}!</Greeting>
    
      </div>

      <div className="shgm-container">
      <h1 className="title">The Shape Game</h1>
      <p>
        You have 15 seconds to find an object that is similar <br /> to the
        object that is displayed on the screen in your home.
      </p>
      
      {/* here the h5 disapers when the user clicks the button*/}
      { timer === 0 ? (
        <p>Start the game by pressing the button when you are ready!</p>
      ): null}
       <Modal show={showModal} centered>
        <Modal.Body>
          <h4>Time is up!</h4>
          <p>Press the button for the next image.</p>
        </Modal.Body>
        <Modal.Footer>
          <ReusableButton variant="primary" onClick={() => setShowModal(false)}>
            OK
          </ReusableButton>
        </Modal.Footer>
       </Modal>
       {currentImg && (
            <img src={currentImg} className="shapeimg" alt="star"/>
       )}
      <div className="timer-container">
        <div><FcAlarmClock className="alarm"/></div>
        <h1 className="timer">{timer}</h1>
      </div>

        <div>
         <button className="menu-btn" onClick={Reset}>
            Start Timer
          </button>
        </div>

      </div>

      <div className="settings">
        <MdOutlineLogout 
          className="logout"
          onClick={() => navigate("/logout")}
        />
      </div>
    
    </>
  );
};

export default ShapeGame;