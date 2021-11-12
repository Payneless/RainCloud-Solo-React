import { csrfFetch } from "./csrf";
const GET_PLAYLISTS = "/profile/playlists";

const getPlaylists = (payload) => {
  return {
    type: GET_PLAYLISTS,
    payload,
  };
};

export const getAllPlaylists = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/playlists/${id}`);
  if (response.ok) {
    const data = await response.json();
    dispatch(getPlaylists(data));
  }
};

const profileReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case GET_PLAYLISTS:
      action.payload.forEach((playlist) => (newState[playlist.id] = playlist));
      return newState;
    default:
      return state;
  }
};

export default profileReducer;
