import { MdClose } from "react-icons/md";

const Modal = (close) => {
  return (
    <div className="overlay">
      <div className="content"></div>
      <MdClose className="close" onClick={close} />
    </div>
  );
};

export default Modal;