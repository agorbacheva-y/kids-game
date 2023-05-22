import GirlSvg from "./GirlSvg";
import CloseButton from "react-bootstrap/CloseButton";
import { useNavigate } from "react-router-dom";
import Greeting from "../Greeting";
import { MdOutlineLogout } from "react-icons/md";
import ReusableButton from "../ReusableButton";

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
        <GirlSvg />
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

export default FacePartGame;