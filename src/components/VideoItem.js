import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="item" onClick={() => onVideoSelect(video)}>
      <div className="video-item">
        <img className="ui image" src= {video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
        <div className="content">
          <div className="header">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
