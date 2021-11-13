import { csrfFetch } from "./csrf";
const GET_PLAYLISTS = "/profile/playlists";
const ADD_PLAYLISTS = "./profile/addplaylist";

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
    default:
      return state;
  }
};

export default playlistReducer;
