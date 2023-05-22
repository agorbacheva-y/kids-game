
const Modal = ({ children }) => {
  return (
    <div className="overlay">
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Modal;