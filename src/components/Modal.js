import { MdClose } from "react-icons/md";


const Modal = ({ children, close }) => {
  return (
    <div className="overlay">
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Modal;