import React, { FC } from 'react';
import Modal from 'react-modal';

interface RatingModalProps {
  isOpen: any;
  onClose: any;
}

const RatingModal: FC<RatingModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Avaliações do Item"
      >
        <h2 className="text-black">Avaliacoes do item:</h2>
        <p>bla bla bla bla bla bla...</p>
        <button onClick={onClose}>Fechar Modal</button>
      </Modal>
    </>
  );
};

export default RatingModal;
