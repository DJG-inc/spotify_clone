import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const InfoSidebar = () => {
  const { track, isInfoSidebarVisible, showVideo } = useContext(PlayerContext);

  // Do not render the sidebar if it is not visible
  if (!isInfoSidebarVisible) return null;

  // If no track is playing, show a placeholder message
  if (!track) {
    return (
      <div className="w-[25%] h-full p-2 flex-col gap-2 text-white lg:flex">
        <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-center items-center">
          <p className="font-bold text-xl">Nothing is playing</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white lg:flex">
      <div className="bg-[#121212] h-auto rounded flex flex-col justify-around p-4">
        {/* Display track information */}
        <div className="flex items-center gap-3">
          <img className="w-16 h-16 rounded" src={track.image} alt={track.name} />
          <div>
            <p className="font-bold text-xl">{track.name}</p>
            <p className="text-gray-400">{track.artist}</p>
            <p className="text-sm text-gray-500">Album: {track.album}</p>
            <p className="text-sm text-gray-500">Released: {track.releaseDate}</p>
          </div>
        </div>

        {/* Display description */}
        <div className="mt-4">
          <p className="text-gray-400">{track.desc}</p>
        </div>

        {/* Switch to video button */}
        <button
          className="mt-4 p-2 bg-green-500 rounded"
          onClick={() => showVideo(track.videoUrl)}
        >
          Switch to Video
        </button>
      </div>
    </div>
  );
};

export default InfoSidebar;
