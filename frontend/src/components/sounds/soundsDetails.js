import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
// import { deleteProduct } from '../../store/sounds';

export const useMediaPlayer = (mediaElement) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  });

  const play = () => {
    setPlayerState({ ...playerState, isPlaying: !playerState.isPlaying });
  };

  // useEffect(() => {
  //   playerState.isPlaying;
  // });
};

const SoundDetail = ({ id, name, content, userId, playlistId, file }) => {
  const dispatch = useDispatch();

  // const handleDelete = (id) => {
  //   dispatch(deleteProduct(id));
  // };
  return (
    <div className="sound-detail">
      <span className="sound-name">{name}</span>
      <span>{content}</span>
      <span>{userId}</span>
      <span>{playlistId}</span>
      <span>{file}</span>
    </div>
  );
};
export default SoundDetail;
