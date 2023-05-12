import { MdClose } from "react-icons/md";

const Modal = ({ children, close }) => {
  return (
    <div>
      <div>
        <MdClose />
        {children}
      </div>
    </div>
  );
};

export default Modal;