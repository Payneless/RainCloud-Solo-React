import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import { useSelector } from "react-redux";
import "./Navigation.css";

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionButtons;
  if (sessionUser) {
    sessionButtons = <ProfileButton user={sessionUser} />;
  } else {
    sessionButtons = (
      <>
        <NavLink to="/login"> Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }
  return (
    <ul>
      <li>
        <NavLink exact to="/">
          Rain Cloud
        </NavLink>
        {isLoaded && sessionButtons}
      </li>
    </ul>
  );
};

export default Navigation;
