// Modal.tsx

import React, { useEffect } from 'react';
import styles from './Modal.module.css';  // Import the CSS module
import { RiCloseCircleFill } from "react-icons/ri";

interface ModalProps {
  isOpen: boolean;               // To control the modal's open/close state
  onClose: () => void;           // Function to close the modal
  children: React.ReactNode;     // Content to be displayed inside the modal
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // Close the modal when the user clicks on the overlay
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Set up an event listener to close the modal when 'Escape' key is pressed
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  return (
    <div
      className={`${styles.modalOverlay} ${isOpen ? styles.open : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={`${styles.modalContent} ${isOpen ? styles.open : ''}`}>
        <button className={styles.modalCloseBtn} onClick={onClose}>
        <RiCloseCircleFill  size={20} />

        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
