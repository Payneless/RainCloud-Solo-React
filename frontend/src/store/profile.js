import { csrfFetch } from "./csrf";
const GET_PLAYLISTS = "/profile/playlists";
const ADD_PLAYLISTS = "./profile/addplaylist";
const UPDATE_PLAYLIST = "./profile/updatePlaylist";
const REMOVE_ONE_PLAYLIST = "./profile/deletePlaylist";
const ADD_TO_PLAYLIST = "sounds/addToPlaylist";
const REMOVE_FROM_PLAYLIST = "sounds/removeFromPlaylist";

const getPlaylists = (payload) => {
  return {
    type: GET_PLAYLISTS,
    payload,
  };
};

const addPlaylist = (payload) => {
  return {
    type: ADD_PLAYLISTS,
    payload,
  };
};

const updatePlaylist = (payload) => {
  return {
    type: UPDATE_PLAYLIST,
    payload,
  };
};
const removePlaylist = (id) => {
  return {
    type: REMOVE_ONE_PLAYLIST,
    payload: id,
  };
};

const addSoundToPlaylist = (payload) => {
  return {
    type: ADD_TO_PLAYLIST,
    payload,
  };
};

const removeFromPlaylist = (payload) => {
  return {
    type: REMOVE_FROM_PLAYLIST,
    payload,
  };
};
export const getAllPlaylists = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/profile/${id}`);
  if (response.ok) {
    const data = await response.json();
    dispatch(getPlaylists(data));
  }
};

export const addAPlaylist = (playlist, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/profile/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(playlist),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addPlaylist(data));
  }
};

export const updateAPlaylist = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/profile/${payload.wantedPlaylist}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(updatePlaylist(data));
  }
};

export const deletePlaylist = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/profile/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(removePlaylist(id));
  }
};
export const addToPlaylist = (soundId, playlistId) => async (dispatch) => {
  const response = await csrfFetch(`/api/stored/${soundId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ playlistId }),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addSoundToPlaylist(data));
  }
};

export const deleteFromPlaylist = (soundId, playlistId) => async (dispatch) => {
  const response = await csrfFetch(
    `/api/stored/${soundId}/playlists/${playlistId}`,
    {
      method: "DELETE",
    }
  );
  if (response.ok) {
    const data = await response.json();
    dispatch(removeFromPlaylist(data));
  }
};

const playlistReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case GET_PLAYLISTS:
      action.payload.forEach((playlist) => (newState[playlist.id] = playlist));
      return newState;
    case ADD_PLAYLISTS:
      newState = {
        ...state,
        [action.payload.newPlaylist.id]: action.payload.newPlaylist,
      };
      return newState;
    case UPDATE_PLAYLIST:
      newState = { ...state };
      newState[action.payload.playlist.id] = action.payload.playlist;
      return newState;
    case REMOVE_ONE_PLAYLIST:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    case ADD_TO_PLAYLIST:
      newState = { ...state };
      newState[action.payload.playlistId].Sounds.push(action.payload.sound);
      return newState;
    case REMOVE_FROM_PLAYLIST:
      newState = { ...state };
      const soundIdx = newState[action.payload.playlistId].Sounds.findIndex(
        (sound) => sound.id === action.payload.sound.id
      );
      newState[action.payload.playlistId].Sounds.splice(soundIdx, 1);
      return newState;
    default:
      return state;
  }
};

export default playlistReducer;
