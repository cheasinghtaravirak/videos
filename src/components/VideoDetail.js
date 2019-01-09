import React from 'react';

const VideoDetail = ({ selectedVideo }) => {

  if(!selectedVideo)
    return <div>Loading...</div>;

  return <div>{selectedVideo.snippet.title}</div>;
}

export default VideoDetail;
