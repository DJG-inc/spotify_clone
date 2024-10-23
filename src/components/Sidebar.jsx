import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { PlaylistContext } from "../context/PlaylistContext";
import Modal from "../components/Modal";

const Sidebar = () => {
  const navigate = useNavigate();
  const { playlists, createPlaylist } = useContext(PlaylistContext);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  const handleCreatePlaylist = (playlistName) => {
    if (playlistName) {
      createPlaylist(playlistName); // Crear la nueva playlist
    }
  };

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[25%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6 h-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>

        <div
          onClick={() => navigate("/search")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6 h-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>

        <div
          onClick={() => navigate("/playlists")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6 h-6" src={assets.playlist_icon} alt="" />
          <p className="font-bold">Your Playlists</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img
              className="w-5 cursor-pointer"
              src={assets.plus_icon}
              alt=""
              onClick={() => setIsModalOpen(true)} // Abrir el modal
            />
          </div>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create your first playlist</h1>
          <p className="font-light">It's easy, we will help you</p>
          <button
            className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4"
            onClick={() => setIsModalOpen(true)} // Abrir el modal
          >
            Create Playlist
          </button>
        </div>

        {/* Sección para mostrar las playlists existentes */}
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Your Playlists</h1>
          {playlists.length > 0 ? (
            playlists.map((playlist, index) => (
              <div
                key={index}
                className="mt-2 text-gray-300 cursor-pointer"
                onClick={() => navigate(`/playlist/${playlist.id}`)}
              >
                <p>{playlist.name}</p>
              </div>
            ))
          ) : (
            <p className="font-light">No playlists available.</p>
          )}
        </div>
      </div>

      {/* Modal para crear la playlist */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreatePlaylist}
      />
    </div>
  );
};

export default Sidebar;
