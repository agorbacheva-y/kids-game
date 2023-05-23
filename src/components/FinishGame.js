import Modal from "./Modal";
import Confetti from "react-confetti";

const FinishGame = ({ children }) => {
  return (
    <div>
        <Modal>
          <div className="finish-overlay"><Confetti /></div>
            <p>Congratulations! You've finished the game!</p>
            {children}
          </Modal>
    </div>
  );
};
export default FinishGame;