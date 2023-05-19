import BoySvg from "./BoySvg";
import CloseButton from "react-bootstrap/CloseButton";
import { Link } from "react-router-dom";

const BodyPartGame = () => {
  const currentUser = localStorage.getItem("currentUser")
  return (
    <>
      <div className="closebtn-container">
        <Link to="/endgame"> 
          <CloseButton className="closebtn" /> 
        </Link>
      </div>
      
      <div className="container">
        <h3>Hi {currentUser}!</h3>
      <h1>body part game</h1>
        <BoySvg />
      </div>
    </>
  );
};

export default BodyPartGame;