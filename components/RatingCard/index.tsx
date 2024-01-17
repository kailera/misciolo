"use client"
import React, { FC, useState } from 'react';
import RatingModal from '../RatingModal';

interface RatingCardProps {
  title: string;
  rating: string;
}

const RatingCard: FC<RatingCardProps> = ({ title, rating }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <h2>{title}</h2>
      <a href="#" onClick={openModal}>
        🎇{rating} (100)
      </a>

      <RatingModal isOpen={modalIsOpen} onClose={closeModal} />
    </>
  );
};

export default RatingCard