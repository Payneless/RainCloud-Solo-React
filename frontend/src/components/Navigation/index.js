import { NavLink } from "react-router-dom";

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);

	if(sessionUser) {
		sessionLinks = (

		)
	} else {
		sessionLinks = (
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
				{isLoaded && sessionLinks}
      </li>
    </ul>
  );
};

export default Navigation;
