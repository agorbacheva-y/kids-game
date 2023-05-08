import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
  <div className="container">
    <Button size="lg">
      <Link to="/bodypartgame" className="btn">Body Part Game</Link>
    </Button>
  </div>
  );
};

export default MainMenu;