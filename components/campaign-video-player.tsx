import React from 'react';
import ReactPlayer from 'react-player'

export const VideoPlayer = (props) => {
  
  return (
    <div className='mb-10 border-2 border-amber-800 text-center'>
        <ReactPlayer controls={true} url={props.url} height={'300px'} style={{width:'50%',margin:'10px auto', height:'40rem'}}/>
    </div>
  );
}

export default VideoPlayer;