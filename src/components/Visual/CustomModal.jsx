import { Button, Modal } from "react-bulma-components";
import PropTypes from "prop-types";

const CustomModal = ({ title, children, isOpen, onClose }) => {
  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Card>
        <Modal.Card.Header showClose={false}>
          <Modal.Card.Title>{title}</Modal.Card.Title>
        </Modal.Card.Header>
        <Modal.Card.Body>{children}</Modal.Card.Body>
        <Modal.Card.Footer>
          <Button onClick={onClose}>Cerrar</Button>
        </Modal.Card.Footer>
      </Modal.Card>
    </Modal>
  );
};

CustomModal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CustomModal;
