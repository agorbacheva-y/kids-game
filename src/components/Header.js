import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <div className="header">
      <p>logo</p>
      {children}
    </div>
  );
};

export default Header;