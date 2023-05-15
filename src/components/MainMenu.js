import Button from "react-bootstrap/Button";
import Header from "./Header";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div>
      <Header>
        <Link to="/"><BsFillArrowLeftCircleFill className="back-btn"/></Link>
      </Header>

      <div className="container">
        <Button size="lg">
          <Link to="/bodypartgame" className="btn">Body Part Game</Link>
        </Button>
      </div>
    </div>
  );
};

export default MainMenu;