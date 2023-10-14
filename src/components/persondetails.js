import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root"); // Make sure to set the root element

const PersonDetailsModal = ({ person, isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Person Details Modal"
    >
      <h2>Person Details</h2>
      <p>Name: {person.name}</p>
      <p>Base: {person.base}</p>
      <p>Seniority: {person.seniority}</p>
      <p>Channel: {person.channel}</p>
      {/* Add more details here */}
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default PersonDetailsModal;
