import "./SideBar.css";
import Avatar from "../../assets/avatar.svg";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={Avatar} alt="Default Avatar" />
      <p className="sidebar__username">User Name</p>
    </div>
  );
}

export default SideBar;
