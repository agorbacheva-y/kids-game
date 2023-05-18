import BoySvg from "./BoySvg";

const BodyPartGame = ({ onClick }) => {
  const currentUser = localStorage.getItem("currentUser")
  return (
    <div className="container">
      <h3>Hi {currentUser}!</h3>
      <h1>body part game</h1>
      <BoySvg />
    </div>
  );
};

export default BodyPartGame;