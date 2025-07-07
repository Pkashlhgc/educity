import React from 'react';
import './VideoPlayer.css';
import Video from '../../assets/Video-Player.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
  return (
    <div className={`Video-Player ${playState ? '' : 'hide'}`}>
      <video src={Video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
