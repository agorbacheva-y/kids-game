import { useNavigate } from "react-router-dom";
import CloseButton from "react-bootstrap/CloseButton";
import BodySvg from "./BodySvg";
import Greeting from "../Greeting";
import Setting from "./Setting";

const BodyPartGame = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="closebtn-container">
        <CloseButton 
          className="closebtn" 
          onClick={() => navigate("/endgame")}
        />
      </div>
      
      <div className="greeting-container">
        <Greeting>Hi!</Greeting>
        <h1 className="title">Guess Body Part</h1>
      </div>

      <BodySvg />

      <div>
        <Setting />
      </div>
    </>
  );
};

export default BodyPartGame;