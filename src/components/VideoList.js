import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <div key={video.id.videoId}>
        <VideoItem onVideoSelect={onVideoSelect} video={video} />
      </div>
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
