import { useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import FaceSvg from "./FaceSvg";
import Greeting from "../Greeting";
import Setting from "./Setting";
import CloseButton from "react-bootstrap/CloseButton";

const FacePartGame = () => {
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
        <h1 className="title">Guess Face Part</h1>
      </div>

      <FaceSvg />
      
      <div>
        <MdOutlineLogout 
          className="logout"
          onClick={() => navigate("/logout")}
        />
        <Setting />
      </div>
    </>
  );
};

export default FacePartGame;