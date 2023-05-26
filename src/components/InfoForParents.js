import { useState } from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from "./Modal";

const InfoForParents = () => {
  const [status, setStatus] = useState(false);

  const closeModal = () => {
    setStatus(false);
  };

    return (
       <div className="container">
            {status && (
            <Modal close={closeModal}>
                 <CloseButton className="closebtn" onClick={closeModal}/>
              <div className="container">
                    <p className="info-text">
                     SmartKids is a fun and educational 
                     app to stimulate your child's learning and 
                     development. With games focused on shape recognition and body awareness we
                     offer for your child to learn while 
                     having fun. Each game is crafted to promote creativity, and critical thinking. 
                     With interactive gameplay and gentle guidance, your 
                     child can enhance their cognitive
                     awareness and attention to detail. Thank You for starting their learning adventure 
                     with SmartKids and empowering 
                     your child's growth!
                   </p> 
               </div> 
            </Modal>
            )}
           <p>Parents, click on the button please <br/> we have some information for you.</p>
        <button onClick={() => setStatus(true)} className="reuse-btn"><h5>For parents!</h5></button>
       </div>
    );
};

export default InfoForParents;