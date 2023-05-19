import BoySvg from "./BoySvg";
import CloseButton from "react-bootstrap/CloseButton";
import { Link } from "react-router-dom";
import Greeting from "./Greeting";
import { MdOutlineLogout } from "react-icons/md";

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
        <Greeting>Hi {currentUser}!</Greeting>
        <h1 className="title">Guess Body Part</h1>
        <BoySvg />
      </div>

      <div className="closebtn-container">
        <Link to="/logout">
          <MdOutlineLogout className="logout"/>
        </Link>
      </div>
    </>
  );
};

export default BodyPartGame;