import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import { SearchProvider } from "./context/SearchContext";
import { FavoritesProvider } from "./context/FavoriteContext";
import InfoSidebar from "./components/InfoSidebar";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <SearchProvider>
          <Sidebar />
          <FavoritesProvider>
            <Display />
          </FavoritesProvider>
          <InfoSidebar />
          <VideoPlayer />
        </SearchProvider>
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
