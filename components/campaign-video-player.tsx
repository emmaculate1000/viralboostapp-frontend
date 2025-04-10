import React from 'react';
import ReactPlayer from 'react-player'

export const VideoPlayer = (props) => {
  
  return (
    <ReactPlayer url={props.url} />
  );
}

export default VideoPlayer;