import { csrfFetch } from "./csrf";
const GET_SOUNDS = "/sounds";

const getSounds = (payload) => {
  return {
    type: GET_SOUNDS,
    payload,
  };
};

export const getAllSounds = () => async (dispatch) => {
  const response = await csrfFetch("/api/sounds");
  console.log("the response", response);
  if (response.ok) {
    const data = await response.json();
    console.log("thisisdata", data);
    dispatch(getSounds(data));
  }
};

const soundsReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case GET_SOUNDS:
      action.payload.forEach((sound) => (newState[sound.id] = sound));
      return newState;
    default:
      return state;
  }
};

export default soundsReducer;
