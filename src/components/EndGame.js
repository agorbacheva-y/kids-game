import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import ReusableButton from "./ReusableButton";


const EndGame = () => {

    return (
        <div className="container">
          
             <Badge bg="danger"><h2>Game over!</h2></Badge>{' '}
            <h3>Play Again?</h3>

              <ReusableButton className="reuse-btn">
                <Link to="/game" >Play Game</Link>
              </ReusableButton>
            <p>or </p>

            <h3>Go back to menu</h3>
           
             <ReusableButton className="reuse-btn">
              <Link to="/" >Menu</Link>
             </ReusableButton>
        </div>
    );
};

export default EndGame;

// Link to correct paths