import { useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  // state for off canvas
  const [ show, setShow ] = useState(false);

  // functions to show and hide off canvas
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const navigate = useNavigate();

  return (
    <>
      <MdSettings 
        className="settings"
        onClick={handleShow}
      />
      <Offcanvas show={show} onHide={handleClose} className="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="m-auto">
            <p>Setting</p>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-center">
          <button 
            className="setting-btn"
            onClick={() => navigate("/bodypartgame")}
            >
            Body Parts
          </button>
          <button 
            className="setting-btn"
            onClick={() => navigate("/facepartgame")}
            >
            Face Parts
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Setting;