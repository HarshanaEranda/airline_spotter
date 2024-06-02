import React from 'react';
import Modal from 'react-modal';
import AirlineForm from './AirlineForm';

const AirlineModal = ({ isOpen, onClose, onSubmit }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Airline Form Modal"
      ariaHideApp={false}
    >
      <h2>Add Airline Sighting</h2>
      <AirlineForm onSubmit={onSubmit} />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default AirlineModal;

