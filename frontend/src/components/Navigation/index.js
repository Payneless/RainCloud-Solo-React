import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import { useSelector } from "react-redux";
import "./Navigation.css";
import LoginFormModal from "../LoginFormPage/index";
import DemoUserLogin from "../DemoUser/DemoUserLogin";
import SignUpFormPageModal from "../SignUpFormPage/index";

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionButtons;
  if (sessionUser) {
    sessionButtons = <ProfileButton user={sessionUser} />;
  } else {
    sessionButtons = (
      <>
        <LoginFormModal />
        <SignUpFormPageModal />
        <DemoUserLogin />
      </>
    );
  }
  return (
    <ul>
      <li className="nav-tools">
        <NavLink exact to="/" className="logo">
          Rain Cloud
        </NavLink>
        {isLoaded && sessionButtons}
      </li>
    </ul>
  );
};

export default Navigation;
