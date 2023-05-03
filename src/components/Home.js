import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button size="lg" variant="primary">
        <Link to="/register">Create new user</Link>
      </Button>

      <Button size="sm">Log in</Button>
    </div>
  );
};

export default Home;

// add Link to log in page once log in component is created