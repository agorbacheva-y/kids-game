import Modal from "./Modal";
import { useState } from "react";

const InfoForParents = () => {
  const [status, setStatus] = useState(false);

    return (
       <div className="container">
       
            {status && (
            <Modal close={() => setStatus(false)}>
              <div>
                   <h2> Welcome, parents!</h2>
                    <p>
                     SmartKids is a fun and educational 
                     app designed to stimulate your child's learning and 
                     development. With engaging games focused on cognitive
                     skills, shape recognition and body awareness our app
                     offers a delightful way for your child to learn while 
                     having fun. Each game is thoughtfully crafted to promote 
                     problem-solving, creativity, and critical thinking. 
                     Through interactive gameplay and gentle guidance, your 
                     child can enhance their cognitive abilities, spatial 
                     awareness, and attention to detail. Join us in empowering 
                     your child's growth and watch them thrive in a safe and 
                     engaging digital environment. Start their learning adventure 
                     with SmartKids today!
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

// change the button to reusablebutton