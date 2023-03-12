import React from "react";

import video from "../../assets/video/video_intro.mp4";

const VideoIntro = () => {
  return (
    <div className="intro">
      <video loop autoPlay playsinline muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoIntro;
