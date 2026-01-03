import React, { useRef } from "react";
import '../style/Reel.css';
import "bootstrap/dist/css/bootstrap.min.css";

const videoData = [
  { id: 1, src: "/video/Jowar-1.mp4" },
  { id: 2, src: "/video/millets.mp4" },
  { id: 3, src: "/video/Bajra-1.mp4" },
  { id: 4, src: "/video/Jowar-1.mp4" },
  { id: 5, src: "/video/millets.mp4" },
  { id: 6, src: "/video/Bajra-1.mp4" },
];

const HorizontalReelsWithHoverPlay = () => {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) video.play();
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) video.pause();
  };

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };
  return (
    <div className="container-fluid py-4">
      <div className="reel-wrapper d-flex overflow-auto">
        {videoData.map((video, index) => (
          <div
            className="reel-card mx-2"
            key={video.id}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              className="reel-video"
              loop
              width="100%"
              height="100%"
            />
            <button
              className="btn btn-dark play-toggle-btn"
              onClick={() => togglePlay(index)}
            >
              Play/Pause
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HorizontalReelsWithHoverPlay;
