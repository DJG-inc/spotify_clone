import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { songsData } from "../assets/assets";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoriteContext"; // Importa el contexto de favoritos
import { PlayerContext } from "../context/PlayerContext";

const Navbar = () => {
  const { showSearch } = useSearch();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { addFavorite, isFavorite } = useFavorites(); // Obtén las funciones necesarias
  const { playWithId } = useContext(PlayerContext);

  // Filtra canciones por título o artista
  const filteredSongs = songsData.filter(
    (song) =>
      song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        {showSearch && (
          <input
            type="text"
            placeholder="Search for music, artists, or podcasts"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white text-black px-4 py-1 rounded-2xl w-full max-w-lg"
          />
        )}
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            D
          </p>
        </div>
      </div>

      {searchTerm && (
        <div className="mt-10">
          <div className="grid grid-cols-3 sm:grid-cols-4 mb-4 pl-2 text-[#a7a7a7]">
            <p>
              <b className="mr-4">#</b>Title
            </p>
            <p>Album</p>
            <img className="m-auto w-4" src={assets.clock_icon} alt="" />
            <p>Like</p>
          </div>
          <hr />
          {filteredSongs.map((item, index) => (
            <div
              onClick={() => playWithId(item.id)} // Asegúrate de que playWithId esté disponible
              key={item.id}
              className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
            >
              <p className="text-white">
                <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                <img className="inline w-10 mr-5" src={item.image} alt="" />
                {item.name}
              </p>
              <p className="text-[15px]">{item.album}</p>
              <p className="text-[15px] text-center">{item.duration}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Evitar que el clic en el botón dispare el evento del div
                  addFavorite(item); // Agregar a favoritos
                }}
                className={`ml-2 ${
                  isFavorite(item.id) ? "text-red-500" : "text-white"
                }`}
              >
                {isFavorite(item.id) ? "❤️" : "🤍"}
              </button>
            </div>
          ))}
          {filteredSongs.length === 0 && (
            <p className="text-center text-[#a7a7a7] mt-4">
              No results found for "{searchTerm}"
            </p>
          )}
        </div>
      )}
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-purple-500 px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>
      </div>
    </>
  );
};

export default Navbar;
