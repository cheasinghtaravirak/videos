import React from 'react';
import VideoItem from './VideoItem';

//VideoList & VideoItem are functional components b/c they don't have state
const VideoList = ({ videos }) => {

  const renderedList = videos.map(video => {
    return (
      <VideoItem video={video} key={video.id.videoId}/>
    );
  });

  return (
    <div className="ui list">
      {renderedList}
    </div>
  );
}

export default VideoList;
