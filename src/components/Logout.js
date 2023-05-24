import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(function() {
      navigate("/")
    }, 2000 );

    localStorage.clear();
  });
  
  return (
    <div className="logout-container">
      <h1>Thanks for playing!</h1>
    </div>
  );
};

export default Logout;