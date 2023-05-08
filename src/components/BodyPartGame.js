import BoyOne from "./BoyOne";

const BodyPartGame = ({ onClick }) => {
  return (
    <div className="container">
      <h1>body part game</h1>
      <BoyOne onClick={onClick} />
    </div>
  );
};

export default BodyPartGame;