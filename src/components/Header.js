import Logo from "./image/Logo.webp";
import LogoText from "./image/LogoText.webp";

const Header = ({ children }) => {
  return (
    <div className="header-container">
      { children }
      <img src={Logo} alt="smart kids logo" />
      <img src={LogoText} alt="smart kids text" />
    </div>
  );
};

export default Header;