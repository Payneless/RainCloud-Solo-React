import { csrfFetch } from "./csrf";
const GET_SOUNDS = "/sounds/getSounds";
const ADD_SOUND = "/sounds/addSound";
const REMOVE_ONE_SOUND = "sounds/removeOneSound";
const UPDATE_ONE_SOUND = "sounds/updateOneSound";
// const ADD_TO_PLAYLIST = "sounds/addToPlaylist";
// const REMOVE_FROM_PLAYLIST = "sounds/removeFromPlaylist";

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

// const addSoundToPlaylist = (payload) => {
//   return {
//     type: ADD_TO_PLAYLIST,
//     payload,
//   };
// };

// const removeFromPlaylist = (soundId, playlistId) => {
//   return {
//     type: REMOVE_FROM_PLAYLIST,
//     payload: { soundId, playlistId },
//   };
// };

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
//json bug
// export const addToPlaylist = (soundId, playlistId) => async (dispatch) => {
//   const response = await csrfFetch(`/api/stored/${soundId}`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ playlistId }),
//   });
//   if (response.ok) {
//     const data = await response.json();
//     dispatch(addSoundToPlaylist(data));
//   }
// };

// export const deleteFromPlaylist = (soundId, playlistId) => async (dispatch) => {
//   const response = await csrfFetch(
//     `/api/stored/${soundId}/playlists/${playlistId}`,
//     {
//       method: "DELETE",
//     }
//   );
//   if (response.ok) {
//     dispatch(removeFromPlaylist(soundId, playlistId));
//   }
// };

const soundsReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case GET_SOUNDS:
      action.payload.forEach((sound) => (newState[sound.id] = sound));
      return newState;
    case ADD_SOUND:
      newState = {
        ...state,
        [action.payload.newSound.id]: action.payload.newSound,
      };
      return newState;
    case UPDATE_ONE_SOUND:
      newState = { ...state };
      newState[action.payload.sound.id] = action.payload.sound;
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
