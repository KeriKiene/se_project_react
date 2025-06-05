import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
      </div>
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        activeModal={activeModal}
        onClose={closeActiveModal}
      >
        <lable htmlfor="name" className="modal__lable">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </lable>
        <lable htmlfor="imageUrl" className="modal__lable">
          Image{" "}
          <input
            type="text"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
          />
        </lable>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <lable htmlfor="hot" className="modal__lable modal__lable_type_radio">
            <input id="hot" type="radio" className="modal__radio-input" /> Hot
          </lable>
          <lable
            htmlfor="warm"
            className="modal__lable modal__lable_type_radio"
          >
            <input id="warm" type="radio" className="modal__radio-input" /> Warm
          </lable>
          <lable
            htmlfor="cold"
            className="modal__lable modal__lable_type_radio"
          >
            <input id="cold" type="radio" className="modal__radio-input" /> Cold
          </lable>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App;
