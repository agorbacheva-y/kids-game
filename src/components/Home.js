import { useNavigate } from "react-router-dom";
import Header from "./Header";
import hamster from "./image/hamster.webp";
import ReusableButton from "./ReusableButton";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-header">
        <Header />
      </div>

      <div className="container">
        <img src={hamster} alt="cartoon hamster" />
      </div>

      <div className="btnContainer">
        <ReusableButton 
          onClick={() => navigate("/register")}
        >
          Register
        </ReusableButton>

        <ReusableButton 
          onClick={() => navigate("/login")}
        >
          Log in
        </ReusableButton>
      </div>

      <div className="btnContainer">
        <ReusableButton 
          onClick={() => {navigate("/menu")}}
          >Start Game
        </ReusableButton>
      </div>
    </>
  );
};

export default Home;