import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <Link to="/">Home Page</Link>
      <p>header</p>
    </div>
  );
};

export default Header;