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
  const [ eyesStatus, setEyesStatus ] = useState(false);
  const [ noseStatus, setNoseStatus ] = useState(false);
  const [ mouthStatus, setMouthStatus ] = useState(false);
  const [ cheeksStatus, setCheeksStatus ] = useState(false);
  const [ chinStatus, setChinStatus ] = useState(false);

  const navigate = useNavigate();
  
  // function for opening modal when click on body part
  const handleEyes = () => {
    setEyesStatus(true);
  };

  const handleNose = () => {
    setNoseStatus(true);
  };

  const handleMouth = () => {
    setMouthStatus(true);
  };

  const handleCheeks = () => {
    setCheeksStatus(true);
  };

  const handleChin = () => {
    setChinStatus(true);
  };

  // function to show finish modal at completion of game
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
          <a className="svg-click">
            <ellipse cx="170" cy="220" rx="25" ry="25" onClick={() => {handleClick(); handleEyes() }} />
            <ellipse cx="290" cy="225" rx="25" ry="25" onClick={() => {handleClick(); handleEyes() }} />
          </a> 

          <a className="svg-click">
            <circle cx="230" cy="265" r="20" onClick={() => {handleClick(); handleNose() }} />
          </a> 

          <a className="svg-click">
            <ellipse cx="230" cy="330" rx="90" ry="40" onClick={() => {handleClick(); handleMouth() }} />
          </a> 

          <a className="svg-click">
            <circle cx="130" cy="270" r="40" onClick={() => {handleClick(); handleCheeks() }} />
            <circle cx="330" cy="270" r="40" onClick={() => {handleClick(); handleCheeks() }} />
          </a> 

          <a className="svg-click">
            <ellipse cx="230" cy="420" rx="70" ry="30" onClick={() => {handleClick(); handleChin() }} />
          </a> 
        </svg>
      </div>

      <div>
        {eyesStatus && (
          <BodyPartModal close={() => setEyesStatus(false)}>
            <div className="container">
              <p>Blink your eyes</p>
              <TextToSpeech text={"Blink your eyes"} />
            </div>
          </BodyPartModal>
        )}
      </div>

      <div>
        {noseStatus && (
          <BodyPartModal close={() => setNoseStatus(false)}>
            <div className="container">
              <p>Point at your nose</p>
              <TextToSpeech text={"Point at your nose"} />
            </div>
          </BodyPartModal>
        )}
      </div>

      <div>
        {mouthStatus && (
          <BodyPartModal close={() => setMouthStatus(false)}>
            <div className="container">
              <p>Move your mouth</p>
              <TextToSpeech text={"Move your mouth"} />
            </div>
          </BodyPartModal>
        )}
      </div>

      <div>
        {cheeksStatus && (
          <BodyPartModal close={() => setCheeksStatus(false)}>
            <div className="container">
              <p>Pat your cheeks</p>
              <TextToSpeech text={"Pat your cheeks"} />
            </div>
          </BodyPartModal>
        )}
      </div>

      <div>
        {chinStatus && (
          <BodyPartModal close={() => setChinStatus(false)}>
            <div className="container">
              <p>Rub your chin</p>
              <TextToSpeech text={"Rub your chin"} />
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