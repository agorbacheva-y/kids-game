import { useState } from "react";
import Boy from "../BodyPartGame/images/Boy.svg";
import FinishGame from "../FinishGame";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  
  // function for modal when click on body part
  const handleFace = () => { setFaceStatus(true); };

  const handleBody = () => { setBodyStatus(true); };

  const handleLeftHand = () => { setLeftHandStatus(true); };

  const handleRightHand = () => { setRightHandStatus(true); };

  const handleLeftFoot = () => { setLeftFootStatus(true); };

  const handleRightFoot = () => { setRightFootStatus(true); };

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
        <img src={Boy} className="svg-boy" alt="boy full-body" />
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1000 1140" 
          className="svg-overlay"
          x="0" 
          y="0"
        >
          <ellipse cx="490" cy="445" rx="275" ry="165" className="svg-click" onClick={() => {handleClick(); handleFace() }} />
          <rect x="360" y="600" width="295" height="420" className="svg-click" onClick={() => {handleClick(); handleBody() }} />
          <circle cx="150" cy="740" r="80" className="svg-click" onClick={() => {handleClick(); handleLeftHand() }} />
          <circle cx="850" cy="710" r="80" className="svg-click" onClick={() => {handleClick(); handleRightHand() }} />
          <ellipse cx="400" cy="1240" rx="80" ry="30" className="svg-click" onClick={() => {handleClick(); handleLeftFoot() }} />
          <ellipse cx="630" cy="1240" rx="80" ry="30" className="svg-click" onClick={() => {handleClick(); handleRightFoot() }} />
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
          <FinishGame>
            <Button 
              className="modal-btn"
              onClick={() => {
                setStatus(true)
                navigate("/menu")
              }}
            >
              Back to menu
            </Button>
          </FinishGame>
        )}
      </div>
    </>
  );
};
export default BoySvg;