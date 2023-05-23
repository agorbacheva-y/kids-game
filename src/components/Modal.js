import CloseButton from 'react-bootstrap/CloseButton';

const Modal = ({ children, close }) => {
  return (
    <div className="overlay">
      <div className="content">
      <CloseButton className="closebtn" onClick={close}/>
        {children}
      </div>
    </div>
  );
};

export default Modal;