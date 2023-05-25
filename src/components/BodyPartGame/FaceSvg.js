import { useState } from "react";
import Girl from "../BodyPartGame/images/Girl.svg";
import FinishGame from "../FinishGame";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import TextToSpeech from "./TextToSpeech";
import { MdClose } from "react-icons/md";


const FaceSvg = () => {
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
  const handleEyes = () => { setEyesStatus(true); };

  const handleNose = () => { setNoseStatus(true); };

  const handleMouth = () => { setMouthStatus(true); };

  const handleCheeks = () => { setCheeksStatus(true); };

  const handleChin = () => { setChinStatus(true); };

  // function to show finish modal at completion of game
  const handleClick = () => {
    // count number of clicks
    setCount(count += 1);
    console.log("count: " + count);

    if (count > 4) {
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
        <img src={Girl} className="svg-girl" alt="girl face"/>
        <svg 
          className="svg-girl-overlay"
          viewBox="0 0 458.16 515.14" 
          xmlns="http://www.w3.org/2000/svg"
          x="0" 
          y="0"
        >
          <ellipse cx="170" cy="220" rx="25" ry="25" className="svg-click" onClick={() => {handleClick(); handleEyes() }} />
          <ellipse cx="290" cy="225" rx="25" ry="25" className="svg-click" onClick={() => {handleClick(); handleEyes() }} />
          <circle cx="230" cy="265" r="20" className="svg-click" onClick={() => {handleClick(); handleNose() }} />
          <ellipse cx="230" cy="330" rx="90" ry="40" className="svg-click" onClick={() => {handleClick(); handleMouth() }} />
          <circle cx="130" cy="270" r="40" className="svg-click" onClick={() => {handleClick(); handleCheeks() }} />
          <circle cx="330" cy="270" r="40" className="svg-click" onClick={() => {handleClick(); handleCheeks() }} />
          <ellipse cx="230" cy="420" rx="70" ry="30" className="svg-click" onClick={() => {handleClick(); handleChin() }} />
        </svg>
      </div>

      <div>
        {eyesStatus && (
          <Modal>
            <div>
              <MdClose className="close" onClick={() => setEyesStatus(false)}/> 
              <p>Blink your eyes</p>
              <TextToSpeech text={"Blink your eyes"} />
            </div>
          </Modal>
        )}
      </div>

      <div>
        {noseStatus && (
          <Modal>
            <div>
              <MdClose className="close" onClick={() => setNoseStatus(false)}/> 
              <p>Point at your nose</p>
              <TextToSpeech text={"Point at your nose"} />
            </div>
          </Modal>
        )}
      </div>

      <div>
        {mouthStatus && (
          <Modal>
            <div>
              <MdClose className="close" onClick={() => setMouthStatus(false)}/> 
              <p>Move your mouth</p>
              <TextToSpeech text={"Move your mouth"} />
            </div>
          </Modal>
        )}
      </div>

      <div>
        {cheeksStatus && (
          <Modal>
            <div>
              <MdClose className="close" onClick={() => setCheeksStatus(false)}/>
              <p>Pat your cheeks</p>
              <TextToSpeech text={"Pat your cheeks"} />
            </div>
          </Modal>
        )}
      </div>

      <div>
        {chinStatus && (
          <Modal>
            <div>
              <MdClose className="close" onClick={() => setChinStatus(false)}/>
              <p>Rub your chin</p>
              <TextToSpeech text={"Rub your chin"} />
            </div>
          </Modal>
        )}
      </div>

      <div>
        {status && (
          // overlay with confetti underneath modal
          <FinishGame>
            <button 
              className="sm-btn"
              onClick={() => {
                navigate("/menu")
              }}
            >
              Back to menu
            </button>
          </FinishGame>
        )}
      </div>
    </>
  );
};
export default FaceSvg;