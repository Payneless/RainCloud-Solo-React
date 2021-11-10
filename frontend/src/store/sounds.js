import { csrfFetch } from "./csrf";
const GET_SOUNDS = "/sounds";
const ADD_SOUND = "/sounds";

const getSounds = (payload) => {
  return {
    type: GET_SOUNDS,
    payload,
  };
};

const addSound = (payload) => {
  return {
    type: ADD_SOUND,
    payload,
  };
};

export const getAllSounds = () => async (dispatch) => {
  const response = await csrfFetch("/api/sounds");
  if (response.ok) {
    const data = await response.json();
    dispatch(getSounds(data));
  }
};

export const addASound = (sound) => async (dispatch) => {
  const response = await csrfFetch("/api/sounds", {
    method: "POST",
    headerS: { "Content-Type": "application/json" },
    body: JSON.stringify(sound),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(addSound(data));
  }
};

const soundsReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case GET_SOUNDS:
      action.payload.forEach((sound) => (newState[sound.id] = sound));
      return newState;
    case ADD_SOUND:
      newState = { ...state, [action.payload.id]: action.payload };
      return newState;
    default:
      return state;
  }
};

export default soundsReducer;
