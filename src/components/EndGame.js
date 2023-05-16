import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import ReusableButton from "./ReusableButton";


const EndGame = () => {

    return (
        <div className="container">
          
             <Badge bg="danger"><h2>Game over!</h2></Badge>{' '}
            <p>Play again?</p>

              <ReusableButton className="reuse-btn">
                <Link to="/game" >Play Game</Link>
              </ReusableButton>
            <p>or </p>
            <p>Go back to menu</p> 
             <ReusableButton className="reuse-btn">
              <Link to="/" >Menu</Link>
             </ReusableButton>
        </div>
    );
};

export default EndGame;

// Link to correct paths