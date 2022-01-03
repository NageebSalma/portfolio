import React from "react";

const vidSrc =
  "https://player.vimeo.com/external/537042948.hd.mp4?s=84d66abc43ed2b268c0c1023e4ce8db368a86c8a&profile_id=172&oauth2_token_id=57447761";
const VideoHeader = () => {
  return (
    <div className="videoWrapper">
      <video
        controls
        playsinline
        autoplay
        muted
        loop
        oncanplay="this.muted=true"
        className="videoHeader"
      >
        <source src={vidSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoHeader;
