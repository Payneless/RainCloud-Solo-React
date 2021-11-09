import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { getAllSounds } from "../../store/sounds";

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

  useEffect(() => {
    playerState.isPlaying
      ? mediaElement.current.play()
      : mediaElement.current.pause();
  }, [playerState.isPlaying, mediaElement]);

  const handleProgress = () => {
    const progress =
      (mediaElement.current.currentTime / mediaElement.current.duration) * 100;
    setPlayerState({ ...playerState, progress });
  };

  const handleMediaProgress = (e) => {
    const manual = Number(e.target.value);
    mediaElement.current.currentTime =
      (mediaElement.current.duration / 100) * manual;
    setPlayerState({ ...playerState, progress: manual });
  };

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  useEffect(() => {
    playerState.isMuted
      ? (mediaElement.current.muted = true)
      : (mediaElement.current.muted = false);
  }, [playerState.isMuted, mediaElement]);

  return {
    playerState,
    play,
    handleProgress,
    handleMediaProgress,
    toggleMute,
  };
};
const MediaPlayer = () => {
  const mediaElement = useRef(null);
  const dispatch = useDispatch();
  const sounds = useSelector((state) => Object.values(state.sounds));
  console.log("this is sounds", sounds);
  useEffect(() => {
    dispatch(getAllSounds());
  }, [dispatch]);
  const { playerState, play, handleProgress, handleMediaProgress, toggleMute } =
    useMediaPlayer(mediaElement);
  // const handleDelete = (id) => {
  //   dispatch(deleteProduct(id));
  // };
  return (
    <div className="media-container">
      <div className="playable-sounds">
        {sounds?.map(({ id, name, content, userId, playlistId, file }) => (
          <div>
            <media src={file} ref={mediaElement} progress={handleProgress} />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default MediaPlayer;
