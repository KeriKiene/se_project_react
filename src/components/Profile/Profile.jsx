import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ onCardClick, clothingItems, onDelete, handleAddClick }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-section">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          onDelete={onDelete}
          handleAddClick={handleAddClick}
        />
      </section>
    </div>
  );
}

export default Profile;
