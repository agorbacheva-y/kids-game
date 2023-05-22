import Modal from "./Modal";
import ReusableButton from "./ReusableButton";
import CloseButton from 'react-bootstrap/CloseButton';

const InfoForParents = () => {
    return (
       <div className="container">
        <Modal> 
            <CloseButton />
        </Modal>
      <ReusableButton className="reuse-btn">For parents</ReusableButton>

       </div>
    );
};

export default InfoForParents;