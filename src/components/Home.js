import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <h1>Home</h1>
      </div>

      <div className="btnContainer">
        <button className="reuse-btn">
          <Link to="/register" className="link">Register</Link>
        </button>

        <button className="reuse-btn">Log in</button>
      </div>
    </>
  );
};

export default Home;

// add Link to log in page once log in component is created