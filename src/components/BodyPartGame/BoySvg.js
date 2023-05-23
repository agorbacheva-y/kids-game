import { useState } from "react";
import Boy from "../BodyPartGame/images/Boy.svg";
import FinishGame from "../FinishGame";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import TextToSpeech from "./TextToSpeech";
import ReusableButtom from "../ReusableButton";
import { MdClose } from "react-icons/md";

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
          viewBox="0 0 1000 1350" 
          className="svg-overlay"
          x="0" 
          y="0"
        >
          <ellipse cx="490" cy="560" rx="275" ry="165" className="svg-click" onClick={() => {handleClick(); handleFace() }} />
          <rect x="360" y="710" width="295" height="420" className="svg-click" onClick={() => {handleClick(); handleBody() }} />
          <circle cx="150" cy="840" r="80" className="svg-click" onClick={() => {handleClick(); handleLeftHand() }} />
          <circle cx="850" cy="810" r="80" className="svg-click" onClick={() => {handleClick(); handleRightHand() }} />
          <ellipse cx="400" cy="1350" rx="80" ry="30" className="svg-click" onClick={() => {handleClick(); handleLeftFoot() }} />
          <ellipse cx="630" cy="1340" rx="80" ry="30" className="svg-click" onClick={() => {handleClick(); handleRightFoot() }} />
        </svg>
      </div>

      <div>
        {faceStatus && (
          <Modal>
            <div>
              <MdClose className="close" onClick={() => setFaceStatus(false)}/> 
              <p>Touch your face</p>
              <TextToSpeech text={"Touch your face"} />
            </div>
          </Modal>
        )}
      </div>

      <div>
        {bodyStatus && (
          <Modal>
            <div>
              <MdClose className="close" onClick={() => setBodyStatus(false)}/> 
              <p>Shake your body</p>
              <TextToSpeech text={"Shake your body"} />
            </div>
          </Modal>
        )}
      </div>

      <div>
        {leftHandStatus && (
          <Modal>
            <div>
              <MdClose className="close" onClick={() => setLeftHandStatus(false)}/> 
              <p>Wave your left hand</p>
              <TextToSpeech text={"Wave your left hand"} />
            </div>
          </Modal>
        )}
      </div>

      <div>
        {rightHandStatus && (
          <Modal>
            <div>
              <MdClose className="close" onClick={() => setRightHandStatus(false)}/> 
              <p>Point up with your right hand</p>
              <TextToSpeech text={"Point to the ceiling with your right hand"} />
            </div>
          </Modal>
        )}
      </div>

      <div>
        {leftFootStatus && (
          <Modal>
            <div>
              <MdClose className="close" onClick={() => setLeftFootStatus(false)}/> 
              <p>Lift your left foot</p>
              <TextToSpeech text={"Lift your left foot"} />
            </div>
          </Modal>
        )}
      </div>

      <div>
        {rightFootStatus && (
          <Modal>
            <div>
              <MdClose className="close" onClick={() => setRightFootStatus(false)}/> 
              <p>Stomp your right foot</p>
              <TextToSpeech text={"Stomp your right foot"} />
            </div>
          </Modal>
        )}
      </div>

      <div>
        {status && (
          // overlay with confetti underneath modal
          <FinishGame>
            <ReusableButtom 
              onClick={() => {
                navigate("/menu")
              }}
            >
              <p className="btn-text">Back to menu</p>
            </ReusableButtom>
          </FinishGame>
        )}
      </div>
    </>
  );
};
export default BoySvg;