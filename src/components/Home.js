import { useNavigate } from "react-router-dom";
import Header from "./Header";
import hamster from "./image/hamster.webp";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-header">
        <Header />
      </div>

      <div className="container">
        <img src={hamster} />
      </div>

      <div className="btnContainer">
        <button 
          className="reuse-btn"
          onClick={() => navigate("/register")}
        >
          Register
        </button>

        <button 
          className="reuse-btn"
          onClick={() => navigate("/login")}
        >
          Log in
        </button>
      </div>
    </>
  );
};

export default Home;

// add Link to log in page once log in component is created