import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import { songsData } from "../assets/assets"; // Asegúrate de tener acceso a las canciones
import { PlayerContext } from "../context/PlayerContext"; // Asegúrate de tener acceso a usePlayer

const Sidebar = () => {
  const navigate = useNavigate();
  const { showSearch, setShowSearch } = useSearch();
  const [expandedGenre, setExpandedGenre] = useState(null);
  const { playWithId } = useContext(PlayerContext); 

  const toggleGenre = (genre) => {
    setExpandedGenre(expandedGenre === genre ? null : genre); // Alternar expansión
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // Agrupar canciones por género
  const genres = {
    Bachata: songsData.filter((song) => song.genre === "Bachata").slice(0, 3),
    Salsa: songsData.filter((song) => song.genre === "Salsa").slice(0, 3),
    "Trap Classics": songsData.filter((song) => song.genre === "Trap").slice(0, 3),
  };

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>
        <div
          onClick={() => {
            toggleSearch();
          }}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              onClick={() => navigate("/favorites")}
              className="w-5"
              src={assets.arrow_icon}
              alt=""
            />
          </div>
        </div>

        {/* Desplegables para los géneros */}
        {Object.keys(genres).map((genre) => (
          <div key={genre}>
            <div
              onClick={() => toggleGenre(genre)}
              className="flex justify-between items-center p-2 cursor-pointer hover:bg-[#ffffff26]"
            >
              <p className="font-semibold">{genre}</p>
              <span>{expandedGenre === genre ? "▼" : "▲"}</span>
            </div>
            {expandedGenre === genre && (
              <div className="pl-4">
                {genres[genre].map((song) => (
                  <div
                    key={song.id}
                    onClick={() => playWithId(song.id)} // Asegúrate de que playWithId esté disponible
                    className="text-white cursor-pointer hover:bg-[#ffffff26] p-1"
                  >
                    {song.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create your first playlist</h1>
          <p className="font-light">It's easy, we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
