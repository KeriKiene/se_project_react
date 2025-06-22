import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ onCardClick, onDelete, card }) {
  return (
    <div>
      <div className="clothes-section">
        <p className="clothes-section__text">Your Items</p>
        <button className="clothes-section__add-btn">+ Add New</button>
      </div>
      <ul className="clothes-section__items">
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              onClick={() => onDelete(card._id)}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
