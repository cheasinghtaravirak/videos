import React from 'react';
import VideoItem from './VideoItem';

//VideoList & VideoItem are functional components b/c they don't have state
const VideoList = ({ videos }) => {

  const renderedList = videos.map(video => {
    return <VideoItem />;
  });

  return (
    <div>{renderedList}</div>
  );
}

export default VideoList;
