import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <h1>Home</h1>
      </div>

      <div className="btnContainer">
        <Button size="lg">
          <Link to="/register" className="btn">Create new user</Link>
        </Button>

        <Button size="lg">
          <Link to="/loginbackup" className="btn">Log in</Link>
        </Button>
      </div>
    </>
  );
};

export default Home;

// add Link to log in page once log in component is created