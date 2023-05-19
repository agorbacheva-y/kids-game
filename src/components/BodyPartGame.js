import BoySvg from "./BoySvg";
import CloseButton from "react-bootstrap/CloseButton";
import { Link } from "react-router-dom";

const BodyPartGame = () => {
  return (
    <>
      <div className="closebtn-container">
        <Link to="/endgame"> 
          <CloseButton className="closebtn" /> 
        </Link>
      </div>
      
      <div className="container">
        <h1>body part game</h1>
        <BoySvg />
      </div>
    </>
  );
};

export default BodyPartGame;