import React, { useRef } from 'react';
import './VideoPlayer.css';
import Video from '../../assets/video-player.mp4'; 

const VideoPlayer = ({ playState, setPlayState }) => {

  const player = useRef(null);
  const closePlayer = ()=>{
    if(e.target === player.current){
      setPlayState(false);

    }
  }


  return (
    <div className={`Video-Player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={Video} autoPlay muted controls />
      <button className="close-btn" onClick={() => setPlayState(false)}>✕</button>
    </div>
  );
};

export default VideoPlayer;
