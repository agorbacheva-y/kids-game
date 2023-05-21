import { MdClose } from "react-icons/md";


const BodyPartModal = ({ children, close }) => {
  return (
    <div className="overlay">
      <div className="content">
      <MdClose className="close" onClick={close}/>  
        {children}
      </div>
    </div>
  );
};

export default BodyPartModal;