import { useState } from "react";
import Modal from "./Modal";

const FinishGame = () => {
  const [ status, setStatus ] = useState(false);

  return (
    <div>
      {status && (
        // set state to false when click on close icon
        <Modal close={() => setStatus(false)}>
          <div className="container">
            <p>This is the modal</p>
          </div>
        </Modal>
        // set state to true after ...
        
      )};
      <button onClick={() => setStatus(true)} className="modal-btn">
        Click Me
      </button>
    </div>
  );
};

export default FinishGame;