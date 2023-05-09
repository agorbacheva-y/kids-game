import BoyOne from "./BoyOne";
import BoySvg from "./BoySvg";

const BodyPartGame = ({ onClick }) => {
  return (
    <div className="container">
      <h1>body part game</h1>
      <BoyOne onClick={onClick} />
      <BoySvg />
    </div>
  );
};

export default BodyPartGame;