import { csrfFetch } from "./csrf";

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const userData = await response.json();
  dispatch(setUser(userData.user));
  return response;
};

const sessionReducer = (state = { user: null }, action) => {
  let stateUser;
  switch (action.type) {
    case SET_USER:
      stateUser = Object.assign({}, state);
      stateUser.user = action.payload;
      return stateUser;
    case REMOVE_USER:
      stateUser = Object.assign({}, state);
      stateUser.user = null;
      return stateUser;
    default:
      return state;
  }
};

export default sessionReducer;
