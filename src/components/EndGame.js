import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';


const EndGame = () => {

    return (
        <div className="container">
             <Badge bg="danger"><h2>Game over!</h2></Badge>{' '}
            <p>Play again?</p>
            <Button size="lg">
          <Link to="/game" className="btn">Play Game</Link>
        </Button>
         <p>Go back to menu</p> 
        <Button size="lg">
          <Link to="/Home" className="btn">Menu</Link>
        </Button>
        </div>

    );
};

export default EndGame;

// Link to correct paths