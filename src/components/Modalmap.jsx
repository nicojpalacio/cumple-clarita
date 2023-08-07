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
          <Modal.Title>Open Kids</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "0" }}>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: "0", overflow: "hidden" }}>
            <iframe
              title="mimapita"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.541513657661!2d-65.24755632362901!3d-26.822723689451628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225cf14576cb51%3A0x4886fd98bbe133bb!2sOpen%20Kids!5e0!3m2!1ses-419!2sar!4v1691382441427!5m2!1ses-419!2sar"
              style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
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
