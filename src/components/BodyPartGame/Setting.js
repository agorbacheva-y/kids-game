import { useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";



const Setting = () => {
  const [ show, setShow ] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <MdSettings 
        className="settings"
        onClick={handleShow}
      />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Setting
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>
              <Link to="/bodypartgame">Body Part Game</Link>
            </li>
            <li>
              <Link to="/facepartgame">Face Part Game</Link>   
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Setting;