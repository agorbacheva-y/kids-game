import ReusableButton from "./ReusableButton";
import { useHistory } from "react-router-dom";
import Home from "./Home";


const Menu = () => {
    return (
     <div className="container"> 
        <h1>Choose a Game</h1>
        <ReusableButton>Body Parts</ReusableButton>
      <ReusableButton>Find objects</ReusableButton>
      <ReusableButton>Drag & drop</ReusableButton>

      <br></br>
      <ReusableButton onClick={handleLogout}>Logout</ReusableButton>
     </div>
    );
};

export default Menu;