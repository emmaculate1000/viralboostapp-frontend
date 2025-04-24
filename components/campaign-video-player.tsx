import React from 'react';
import ReactPlayer from 'react-player'

export const VideoPlayer = (props) => {
  
  return (
    <div className='text-center'>
        <ReactPlayer controls={true} url={props.url} width={'100%'} height={'100%'} style={{margin:'10px auto',position:'relative',border:'1px solid #ccc'}}/>
    </div>
  );
}

export default VideoPlayer;