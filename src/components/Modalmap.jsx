import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Modalmap() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        DIRECCION
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Barrio Lomas de Tafi Sector 13 maz12 casa26. Sobre Raya al 1200</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "0" }}>
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: "0",
              overflow: "hidden",
            }}
          >
            <iframe
              title="mapa"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3561.980181146685!2d-65.22957662456524!3d-26.776901676728393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ2JzM2LjkiUyA2NcKwMTMnMzcuMiJX!5e0!3m2!1ses!2sar!4v1697668892948!5m2!1ses!2sar"
              width="400"
              height="300"
              
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalmap;
