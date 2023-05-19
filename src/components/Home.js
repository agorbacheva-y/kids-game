import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <h1>Home</h1>
      </div>

      <div className="btnContainer">
        <Button size="lg">Log in</Button>

        <Button size="lg">
          <Link to="/register" className="btn">Register</Link>
        </Button>

        <Button size="lg">Log in</Button>
      </div>
    </>
  );
};

export default Home;

// add Link to log in page once log in component is created