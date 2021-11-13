import { csrfFetch } from "./csrf";
const GET_PLAYLISTS = "/profile/playlists";
const ADD_PLAYLISTS = "./profile/addplaylist";
const UPDATE_PLAYLIST = "./profile/updatePlaylist";
const REMOVE_ONE_PLAYLIST = "./profile/deletePlaylist";

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

export const updateAPlaylist = (playlist) => async (dispatch) => {
  console.log("YOO", playlist.id);
  const response = await csrfFetch(`/api/profile/${playlist.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(playlist),
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
      console.log("payload", action.payload);
      newState[action.payload.playlist.id] = action.payload.playlist;
      return newState;
    case REMOVE_ONE_PLAYLIST:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default playlistReducer;
