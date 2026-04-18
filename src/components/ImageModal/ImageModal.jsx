import Modal from "react-modal"
import css from "./ImageModal.module.css"

Modal.setAppElement('#root')

export default function ImageModal({ image, onClose }) {
  return (
    <Modal
      isOpen={image !== null}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      {image && (
        <div className={css.content}>
          <img
            className={css.image}
            src={image.urls.regular}
            alt={image.alt_description}
          />
          <div className={css.info}>
            <p>📷 Photographer: {image.user.name} (@{image.user.username})</p>
            <p>❤️ Likes: {image.likes}</p>
            <p>🎨 Dominant Color:
              <span
                className={css.colorCircle}
              />
              {image.color}
            </p>
            {image.description && <p>{image.description}</p>}

            <a href={image.links.html}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#4fa94d', textDecoration: 'none', fontWeight: '500' }}
            >
             View on Unsplash &gt;
            </a>
          </div>
        </div>
      )}
    </Modal>
  )
}