import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import { useSelector } from "react-redux";
import "./Navigation.css";
import LoginFormModal from "../LoginFormPage/index";
import DemoUserLogin from "../DemoUser/DemoUserLogin";
import SignUpFormPageModal from "../SignUpFormPage/index";
import AddSound from "../CreateSound/index";

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionButtons;
  if (sessionUser) {
    sessionButtons = (
      <div className="logged-in-buttons">
        <h4>Welcome {sessionUser.username}</h4>
        <ProfileButton user={sessionUser} />
        <AddSound />
      </div>
    );
  } else {
    sessionButtons = (
      <div className="logged-out-buttons">
        <LoginFormModal />
        <SignUpFormPageModal />
        <DemoUserLogin />
      </div>
    );
  }
  return (
    <ul className="nav-list">
      <li key="nav-bar" className="nav-tools">
        <div className="main-header">
          <img
            className="logo-image"
            src="https://cdn.discordapp.com/attachments/897232495580414045/906317425425940490/RainCloudLogo.png"
          />
          <NavLink exact to="/" className="logo">
            Rain Cloud
          </NavLink>
          <img
            className="logo-image-reverse"
            src="https://cdn.discordapp.com/attachments/897232495580414045/906317425425940490/RainCloudLogo.png"
          />
        </div>
        {isLoaded && sessionButtons}
      </li>
    </ul>
  );
};

export default Navigation;
