import { useState } from "react";
import Boy from "../images/Boy.svg";
import Modal from "./Modal";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";
import BodyPartModal from "./BodyPartModal";
import TextToSpeech from "./TextToSpeech";
import Button from "react-bootstrap/Button";

const BoySvg = () => {
  // state to hold count of clicks
  let [ count, setCount ] = useState(null);

  // state for finish modal open and close
  const [ status, setStatus ] = useState(false);

  // state for body part modal open and close
  const [ faceStatus, setFaceStatus ] = useState(false);
  const [ bodyStatus, setBodyStatus ] = useState(false);
  const [ leftHandStatus, setLeftHandStatus ] = useState(false);
  const [ rightHandStatus, setRightHandStatus ] = useState(false);
  const [ leftFootStatus, setLeftFootStatus ] = useState(false);
  const [ rightFootStatus, setRightFootStatus ] = useState(false);
  
  // function for alert when click on body part
  const handleFace = () => {
    setFaceStatus(true);
  };

  const handleBody = () => {
    setBodyStatus(true);
  };

  const handleLeftHand = () => {
    setLeftHandStatus(true);
  };

  const handleRightHand = () => {
    setRightHandStatus(true);
  };

  const handleLeftFoot = () => {
    setLeftFootStatus(true);
  };

  const handleRightFoot = () => {
    setRightFootStatus(true);
  };

  // function to show modal at completion of game
  const handleClick = () => {
    // count number of clicks
    setCount(count += 1);
    console.log("count: " + count);

    if (count > 5) {
      // wait 3 secs before finish modal appears
      document.addEventListener('click', function() {
        setTimeout(function() {
          setStatus(true)
        }, 3000 );
      });
        
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
          <a className="svg-click">
            <ellipse cx="490" cy="445" rx="275" ry="165" onClick={() => {handleClick(); handleFace() }} />
          </a> 

          <a className="svg-click">
            <rect x="360" y="600" width="295" height="420" onClick={() => {handleClick(); handleBody() }} />
          </a>    

          <a className="svg-click">
            <circle cx="150" cy="740" r="80" onClick={() => {handleClick(); handleLeftHand() }} />
          </a> 

          <a className="svg-click">
            <circle cx="850" cy="710" r="80" onClick={() => {handleClick(); handleRightHand() }} />
          </a> 

          <a className="svg-click">
            <ellipse cx="400" cy="1240" rx="80" ry="30" onClick={() => {handleClick(); handleLeftFoot() }} />
          </a> 

          <a className="svg-click">
            <ellipse cx="630" cy="1240" rx="80" ry="30" onClick={() => {handleClick(); handleRightFoot() }} />
          </a> 

        </svg>
      </div>

      <div className="container">
        {faceStatus && (
          <BodyPartModal close={() => setFaceStatus(false)}>
            <div className="container">
              <p>face</p>
              <TextToSpeech text={"face"} />
            </div>
          </BodyPartModal>
        )}
      </div>

      <div className="container">
        {bodyStatus && (
          <BodyPartModal close={() => setBodyStatus(false)}>
            <div className="container">
              <p>body</p>
              <TextToSpeech text={"body"} />
            </div>
          </BodyPartModal>
        )}
      </div>

      <div className="container">
        {leftHandStatus && (
          <BodyPartModal close={() => setLeftHandStatus(false)}>
            <div className="container">
              <p>left hand</p>
              <TextToSpeech text={"left hand"} />
            </div>
          </BodyPartModal>
        )}
      </div>

      <div className="container">
        {rightHandStatus && (
          <BodyPartModal close={() => setRightHandStatus(false)}>
            <div className="container">
              <p>right hand</p>
              <TextToSpeech text={"right hand"} />
            </div>
          </BodyPartModal>
        )}
      </div>

      <div className="container">
        {leftFootStatus && (
          <BodyPartModal close={() => setLeftFootStatus(false)}>
            <div className="container">
              <p>left foot</p>
              <TextToSpeech text={"left foot"} />
            </div>
          </BodyPartModal>
        )}
      </div>

      <div className="container">
        {rightFootStatus && (
          <BodyPartModal close={() => setRightFootStatus(false)}>
            <div className="container">
              <p>right foot</p>
              <TextToSpeech text={"right foot"} />
            </div>
          </BodyPartModal>
        )}
      </div>

      <div className="container">
        {status && (
          // overlay with confetti underneath modal
          <Modal>
            <div className="finish-overlay"><Confetti /></div>
            <p>Congratulations! You've finished the game!</p>
            <Button onClick={() => setStatus(true)} className="modal-btn">
              <Link to="/mainmenu" className="btn">Back to menu</Link>
            </Button>
          </Modal>
        )}
        
      </div>
    </>
  );
};
export default BoySvg;

// when replacing <button> with custom <ReusableButton> 
