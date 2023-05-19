import BoySvg from "./BoySvg";
import CloseButton from "react-bootstrap/CloseButton";
import { useNavigate } from "react-router-dom";
import Greeting from "./Greeting";
import { MdOutlineLogout } from "react-icons/md";

const BodyPartGame = () => {
  const currentUser = localStorage.getItem("currentUser")
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
        <Greeting>Hi {currentUser}!</Greeting>
        <h1 className="title">Guess Body Part</h1>
        <BoySvg />
      </div>

      <div className="closebtn-container">
        <MdOutlineLogout 
          className="logout"
          onClick={() => navigate("/logout")}
        />
      </div>
    </>
  );
};

export default BodyPartGame;