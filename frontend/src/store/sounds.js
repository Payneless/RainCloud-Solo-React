import { csrfFetch } from "./csrf";
const GET_SOUNDS = "/sounds/getSounds";
const ADD_SOUND = "/sounds/addSound";
const REMOVE_ONE_SOUND = "sounds/removeOneSound";
const UPDATE_ONE_SOUND = "sounds/updateOneSound";

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

const updateSound = (payload) => {
  return {
    type: UPDATE_ONE_SOUND,
    payload,
  };
};

const removeOneSound = (id) => {
  return { type: REMOVE_ONE_SOUND, payload: id };
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sound),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(addSound(data));
  }
};

export const updateOneSound = (payload, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/sounds/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(updateSound(data));
  }
};

export const deleteSound = (id) => async (dispatch) => {
  const response = await csrfFetch(`api/sounds/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(removeOneSound(id));
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
    case UPDATE_ONE_SOUND:
      newState = { ...state, [action.payload.id]: action.payload };
      return newState;
    case REMOVE_ONE_SOUND:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default soundsReducer;
