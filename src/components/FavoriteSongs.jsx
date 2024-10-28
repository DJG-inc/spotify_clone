import React, { useContext } from "react";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";
import { useFavorites } from "../context/FavoriteContext"; 
import { PlayerContext } from "../context/PlayerContext";

const FavoriteSongs = () => {
  const { favorites, removeFavorite, isFavorite } = useFavorites(); 
  const { playWithId } = useContext(PlayerContext); 

  const favoriteAlbum = {
    name: "Your Favorites",
    image: "favorite_album_image.jpg", // Cambiar la imagen por una real
    desc: "A collection of your favorite songs.",
  };

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={favoriteAlbum.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{favoriteAlbum.name}</h2>
          <h4>{favoriteAlbum.desc}</h4>
          <p className="mt-1">
            <img className="inline-block w-5" src={assets.spotify_logo} alt="" />
            <b> Spotify </b>
            • {favorites.length} songs
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-5 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p><b className="mr-4">#</b>Title</p>
        <p>Album</p>
        <p className="hidden sm:block">Date added</p>
        <p className="hidden sm:block">Duration</p>
        <p>Like</p>
      </div>
      <hr />
      {favorites.length > 0 ? (
        favorites.map((item, index) => (
            console.log(item),
          <div
            onClick={() => playWithId(item.id)}
            key={item.id} // Usar item.id como clave
            className="grid grid-cols-4 sm:grid-cols-5 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer"
          >
            <p className="text-white">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img className="inline w-10 mr-5" src={item.image} alt="" />
              {item.name}
            </p>
            <p className="text-[15px]">{item.album}</p>
            <p className="text-[15px] hidden sm:block">5 days ago</p>
            <p className="text-[15px] text-center">{item.duration}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeFavorite(item.id); // Usar la función para eliminar el favorito
              }}
              className="ml-2 text-white"
            >
              ❤️ {/* Mostrar corazón lleno */}
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-[#a7a7a7] mt-4">
          No favorite songs added yet.
        </p>
      )}
    </>
  );
};

export default FavoriteSongs;
