import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
  const { urls, alt_description, user, likes } = image;

  return (
    <Modal
      isOpen={Boolean(image)}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.content}>
        <img src={urls.regular} alt={alt_description} className={styles.image} />
        <p>{alt_description}</p>
        <p>By: {user.name}</p>
        <p>Likes: {likes}</p>
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;