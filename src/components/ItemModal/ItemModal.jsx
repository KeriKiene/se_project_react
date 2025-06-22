import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card, onDelete }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src="../src/assets/CloseButton.png"
            alt="ItemCardClose"
            className="modal__close-btn"
          />
        </button>
        <img src={card.link} alt="card" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button
            id="id"
            onClick={() => onDelete(card._id)}
            type="button"
            className="delete"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
