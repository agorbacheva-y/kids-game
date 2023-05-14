import Boy from "../images/Boy.svg";
import { useState } from "react";
import Modal from "./Modal";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

const BoySvg = () => {
  // state to hold count of clicks
  let [ count, setCount ] = useState(null);

  // state for modal open and close
  const [ status, setStatus ] = useState(false);

  // function for alert when click on body part
  const handleAlert = (bodyPart) => {
    alert(bodyPart);
  };

  // function to show modal at completion of game
  const handleClick = () => {
    // count number of clicks
    setCount(count += 1);
    console.log("count: " + count);

    if (count > 1) {
      // set modal state to true after x clicks
      setStatus(true);
      setCount(0);
    }
  };

  return (
    <>
      <div className="container">
        <img src={Boy} className="svg-boy" alt="boy full-body"/>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1000 1140" 
          className="svg-overlay"
          x="0" 
          y="0"
        >
          <ellipse  
            cx="490" cy="445" rx="275" ry="165" 
            className="svg-click" 
            onClick={() => {handleClick(); handleAlert("face")}} />

          <rect 
            x="360" y="600" width="295" height="420" 
            className="svg-click" 
            onClick={() => {handleClick(); handleAlert("body")}} />  

          <circle 
            cx="150" cy="740" r="80" 
            className="svg-click" 
            onClick={() => {handleClick(); handleAlert("left hand")}} /> 

          <circle 
            cx="850" cy="710" r="80" 
            className="svg-click" 
            onClick={() => {handleClick(); handleAlert("right hand")}} />

          <ellipse 
            cx="400" cy="1240" rx="80" ry="30" 
            className="svg-click" 
            onClick={() => {handleClick(); handleAlert("left foot")}} />

          <ellipse 
            cx="630" cy="1240" rx="80" ry="30" 
            className="svg-click" 
            onClick={() => {handleClick(); handleAlert("right foot")}} />

        </svg>
      </div>

      <div className="container">
        {status && (
          // overlay with confetti underneath modal
          <Modal>
            <div className="finish-overlay"><Confetti /></div>
            <p>Congratulations! You've finished the game!</p>
            <button onClick={() => setStatus(true)} className="modal-btn">
              <Link to="/mainmenu" className="btn">Back to menu</Link>
            </button>
          </Modal>
        )}
        
      </div>
    </>
  );
};
export default BoySvg;