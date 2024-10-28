import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";
import { useFavorites } from "../context/FavoriteContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const album = albumsData[id];
  const { playWithId } = useContext(PlayerContext);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  // Filtrar solo las canciones que pertenecen al álbum actual
  const albumSongs = songsData.filter((song) => song.album === album.name);

  // Función para agregar o eliminar favoritos
  const handleFavoriteToggle = (song) => {
    if (isFavorite(song.id)) {
      removeFavorite(song.id);
    } else {
      addFavorite(song);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={album.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{album.name}</h2>
          <h4>{album.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt=""
            />
            <b> Spotify </b>• 1,000,000 likes •{" "}
            <b>{albumSongs.length} songs, </b>
            about 2 hr 50 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-5 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date added</p>
        <p className="hidden sm:block">Duration</p>
        <p>Like</p>
      </div>
      <hr />
      {albumSongs.map((item, index) => (
        <div
          onClick={() => playWithId(item.id)}
          key={index}
          className="grid grid-cols-4 sm:grid-cols-5 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-10 mr-5" src={item.image} alt="" />
            {item.name}
          </p>
          <p className="text-[15px]">{album.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
          {/* Botón de favorito */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleFavoriteToggle(item);
            }}
            className={`ml-2 text-[20px] ${
              isFavorite(item.id) ? "text-red-500" : "text-white"
            }`}
          >
            {isFavorite(item.id) ? "❤️" : "🤍"}
          </button>
        </div>
      ))}

      {albumSongs.length === 0 && (
        <p className="text-center text-[#a7a7a7] mt-4">
          No songs available for this album.
        </p>
      )}
    </>
  );
};

export default DisplayAlbum;
