import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAllSounds } from "../../store/sounds";
import AudioPlayer from "react-h5-audio-player";
import "./mediaplayer.css";

const MediaPlayer = ({ file, name }) => {
  const dispatch = useDispatch();
  const sounds = useSelector((state) => Object.values(state.sounds));
  useEffect(() => {
    dispatch(getAllSounds());
  }, [dispatch]);
  // const handleDelete = (id) => {
  //   dispatch(deleteProduct(id));
  // };
  return (
    <div className="media-container">
      <AudioPlayer
        src={file}
        showFilledVolume={true}
        showJumpControls={false}
        autoPlay={false}
      />
      {name}
    </div>
  );
};
export default MediaPlayer;
