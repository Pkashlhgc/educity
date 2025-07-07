import React from 'react';
import './VideoPlayer.css';
import Video from '../../assets/video-player.mp4'; // ✅ use lowercase file name

const VideoPlayer = ({ playState, setPlayState }) => {
  return (
    <div className={`Video-Player ${playState ? '' : 'hide'}`}>
      <video src={Video} autoPlay muted controls />
      <button className="close-btn" onClick={() => setPlayState(false)}>✕</button>
    </div>
  );
};

export default VideoPlayer;
