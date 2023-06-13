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
        <img src={hamster} alt="cartoon hamster" />
      </div>

      <div className="btnContainer">
        <button 
          className="lg-btn"
          onClick={() => {navigate("/menu")}}
          >Start Game
        </button>
      </div>
    </>
  );
};

export default Home;