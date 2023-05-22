import { useState } from "react";
import Girl from "../BodyPartGame/images/Girl.svg";
import Modal from "../Modal";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import BodyPartModal from "./BodyPartModal";
import TextToSpeech from "./TextToSpeech";
import Button from "react-bootstrap/Button";

const GirlSvg = () => {
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

  const navigate = useNavigate();
  
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
        <img src={Girl} className="svg-boy" alt="boy full-body"/>
        <svg 
          className="svg-overlay"
          viewBox="0 0 458.16 515.14" 
          xmlns="http://www.w3.org/2000/svg"
          x="0" 
          y="0"
        >
          <a className="svg-click" eyes>
            <ellipse cx="170" cy="220" rx="25" ry="25" onClick={() => {handleClick(); handleFace() }} />
            <ellipse cx="290" cy="225" rx="25" ry="25" onClick={() => {handleClick(); handleFace() }} />
          </a> 

          <a className="svg-click" nose>
            <circle cx="230" cy="265" r="20" onClick={() => {handleClick(); handleLeftHand() }} />
          </a> 

          <a className="svg-click" mouth>
            <ellipse cx="230" cy="330" rx="90" ry="40" onClick={() => {handleClick(); handleLeftFoot() }} />
          </a> 

          <a className="svg-click" cheeks>
            <circle cx="110" cy="270" r="40" onClick={() => {handleClick(); handleRightHand() }} />
            <circle cx="350" cy="270" r="40" onClick={() => {handleClick(); handleRightHand() }} />
          </a> 

          <a className="svg-click" chin>
            <ellipse cx="230" cy="420" rx="70" ry="30" onClick={() => {handleClick(); handleLeftFoot() }} />
          </a> 
        </svg>
      </div>

      <div>
        {faceStatus && (
          <BodyPartModal close={() => setFaceStatus(false)}>
            <div className="container">
              <p>Touch your face</p>
              <TextToSpeech text={"Touch your face"} />
            </div>
          </BodyPartModal>
        )}
      </div>

      <div>
        {bodyStatus && (
          <BodyPartModal close={() => setBodyStatus(false)}>
            <div className="container">
              <p>Shake your body</p>
              <TextToSpeech text={"Shake your body"} />
            </div>
          </BodyPartModal>
        )}
      </div>

      <div>
        {leftHandStatus && (
          <BodyPartModal close={() => setLeftHandStatus(false)}>
            <div className="container">
              <p>Wave your left hand</p>
              <TextToSpeech text={"Wave your left hand"} />
            </div>
          </BodyPartModal>
        )}
      </div>

      <div>
        {rightHandStatus && (
          <BodyPartModal close={() => setRightHandStatus(false)}>
            <div className="container">
              <p>Point to the ceiling with your right hand</p>
              <TextToSpeech text={"Point to the ceiling with your right hand"} />
            </div>
          </BodyPartModal>
        )}
      </div>

      <div>
        {leftFootStatus && (
          <BodyPartModal close={() => setLeftFootStatus(false)}>
            <div className="container">
              <p>Lift your left foot</p>
              <TextToSpeech text={"Lift your left foot"} />
            </div>
          </BodyPartModal>
        )}
      </div>

      <div>
        {rightFootStatus && (
          <BodyPartModal close={() => setRightFootStatus(false)}>
            <div className="container">
              <p>Stomp your right foot</p>
              <TextToSpeech text={"Stomp your right foot"} />
            </div>
          </BodyPartModal>
        )}
      </div>

      <div>
        {status && (
          // overlay with confetti underneath modal
          <Modal>
            <div className="finish-overlay"><Confetti /></div>
            <p>Congratulations! You've finished the game!</p>
            <Button 
              onClick={() => {
                setStatus(true)
                navigate("/menu")
              }}
              className="modal-btn"
            >
              Back to menu
            </Button>
          </Modal>
        )}
        
      </div>
    </>
  );
};
export default GirlSvg;