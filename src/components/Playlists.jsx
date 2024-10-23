import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlaylistContext } from "../context/PlaylistContext";

const Playlists = () => {
  const { playlists } = useContext(PlaylistContext);
  const navigate = useNavigate(); // Para navegar a otra ruta

  const handlePlaylistClick = (id) => {
    navigate(`/playlist/${id}`); // Navegar a la ruta de la playlist específica
  };

  return (
    <div className="p-4 bg-[#121212] h-full">
      <h1 className="text-white text-2xl mb-4">Your Playlists</h1>
      {playlists.length > 0 ? (
        playlists.map((playlist, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] p-2 mb-2 rounded cursor-pointer"
            onClick={() => handlePlaylistClick(playlist.id)} // Manejar el clic en la playlist
          >
            <h2 className="text-white">{playlist.name}</h2>
            <p className="text-gray-400">{playlist.songs.length} songs</p>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No playlists available.</p>
      )}
    </div>
  );
};

export default Playlists;
