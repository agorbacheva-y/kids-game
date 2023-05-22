import Modal from "./Modal";
import ReusableButton from "./ReusableButton";

const InfoForParents = () => {
    return (
       <div className="container">
        <Modal> 
            <ReusableButton>Close button</ReusableButton>
        </Modal>
      <ReusableButton className="reuse-btn">For parents</ReusableButton>

       </div>
    );
};

export default InfoForParents;