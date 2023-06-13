import { useNavigate } from "react-router-dom";
import FaceSvg from "./FaceSvg";
import Greeting from "../Greeting";
import Setting from "./Setting";
import CloseButton from "react-bootstrap/CloseButton";

const FacePartGame = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="closebtn-container">
        <CloseButton 
          className="closebtn" 
          onClick={() => navigate("/endgame")}
        /> 
      </div>
      
      <div className="container">
        <Greeting>Hi!</Greeting>
        <h1 className="title">Guess Face Part</h1>
      </div>

      <FaceSvg />
      
      <div>
        <Setting />
      </div>
    </>
  );
};

export default FacePartGame;