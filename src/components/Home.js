import ReusableButton from "./ReusableButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <h1>Home</h1>
      </div>

      <div className="btnContainer">
        <ReusableButton 
          className="reuse-btn"
          onClick={() => navigate("/register")}
        >
          Register
        </ReusableButton>

        <ReusableButton 
          className="reuse-btn"
          onClick={() => navigate("/loginfeature")}
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