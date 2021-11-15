import AudioPlayer from "react-h5-audio-player";
import "./mediaplayer.css";

const MediaPlayer = ({ file, name, content }) => {
  return (
    <div className="media-container">
      {name}
      <AudioPlayer
        src={file}
        showFilledVolume={true}
        showJumpControls={false}
        autoPlay={false}
      />
      {content}
    </div>
  );
};
export default MediaPlayer;
