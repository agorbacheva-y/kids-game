import { useNavigate } from "react-router-dom";
import ReusableButton from "./ReusableButton";

const EndGame = () => {
  const navigate = useNavigate();
    return (
        <div>
          <div className="header-container">
            <h1>Oh no, leaving so soon?</h1>
          </div>
          
          <div className="container">     
            <p>Play Again?</p>
              <ReusableButton 
                onClick={() => navigate("/bodypartgame")}  
              >
                Play Game
              </ReusableButton>
            <p>or </p>

            <p>Go back to menu</p>
          
            <ReusableButton 
                onClick={() => navigate("/menu")}
              >
                Menu
            </ReusableButton>
          </div>
        </div>
    );
};

export default EndGame;

