import React from "react";
import { useParams } from "react-router-dom";

const VideoDetail = () => {
  const { videoId } = useParams();
  console.log(videoId)
  return <div>Video Detail page</div>;
};

export default VideoDetail;
