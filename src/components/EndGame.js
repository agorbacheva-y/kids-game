import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import ReusableButton from "./ReusableButton";


const EndGame = () => {

    return (
        <div className="container">
          
             <Badge className="badge" bg="danger"><h2>Oh no, leaving so soon?</h2></Badge>{' '}
            <h3>Play Again?</h3>

              <ReusableButton className="reuse-btn">
                <Link className="menulink" to="/bodypartgame" >Play Game</Link>
              </ReusableButton>
            <p>or </p>

            <h3>Go back to menu</h3>
           
             <ReusableButton className="reuse-btn">
              <Link className="menulink" to="/menu" >Menu</Link>
             </ReusableButton>
        </div>
    );
};

export default EndGame;

