import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const VideoPlayer = () => {
  const { isVideoPlaying, videoUrl, hideVideo } = useContext(PlayerContext);

  if (!isVideoPlaying || !videoUrl) return null; // Don't show the player if no video is playing

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative">
        <iframe
          width="560"
          height="315"
          src={videoUrl}  // YouTube video URL
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button 
          className="absolute top-2 right-2 text-white p-2 bg-red-600 rounded-full"
          onClick={hideVideo}
        >
          Close Video
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
