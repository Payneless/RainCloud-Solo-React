const GET_SOUNDS = "/sounds";

const getSounds = (payload) => {
  return {
    type: GET_SOUNDS,
    payload,
  };
};
