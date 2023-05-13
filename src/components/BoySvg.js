import Boy from "../images/Boy.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FinishGame from "./FinishGame";
import Modal from "./Modal";

const BoySvg = () => {
  // state to hold count of clicks
  let [ count, setCount ] = useState(null);

  // state for modal open and close
  const [ status, setStatus ] = useState(false);

  // useNavigate to route to main menu after 5 clicks
  const navigate = useNavigate();

  const handleClick = () => {
    // count number of clicks
    setCount(count += 1);
    console.log("count: " + count);

    if (count > 2) {
      setStatus(true);
      // return to main menu after x clicks
      // navigate('/mainmenu', { replace:true });
    }
  };

  const handleAlert = (bodyPart) => {
    alert(bodyPart);
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

      <div>
      {status && (
        // set state to false when click on close icon
        <Modal close={() => setStatus(false)}>
          <div className="container">
            <p>This is the modal</p>
          </div>
        </Modal>
        // set state to true after ...
        
      )}
      </div>
    </>
  );
};
export default BoySvg;

// Confetti won't fire when placed in if statement