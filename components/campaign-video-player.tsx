import React from 'react';
import ReactPlayer from 'react-player'

export const VideoPlayer = (props) => {
  
  return (
    <div className='mb-10 text-center'>
        <ReactPlayer controls={true} url={props.url} height={'250px'} width={'80%'} style={{width:'40%',margin:'10px auto',position:'relative',border:'1px solid #ccc'}}/>
    </div>
  );
}

export default VideoPlayer;