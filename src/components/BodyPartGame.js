import BoyOne from "./BoyOne";
import Boy from "../images/Boy.svg"

console.log(Boy);

const BodyPartGame = ({ onClick }) => {
  return (
    <div className="container">
      <h1>body part game</h1>
      <BoyOne onClick={onClick} />
      <img src={Boy} />
      <div style={{ backgroundImage: "url(/static/media/Boy.7b38cb16b2a90bd7d333ebd637c411da.svg)" }}></div>
    </div>
  );
};

export default BodyPartGame;