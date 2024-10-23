import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { PlaylistContext } from "../context/PlaylistContext";
import { PlayerContext } from "../context/PlayerContext"; // Importar el contexto del reproductor

const SongItem = ({ id, name, image, desc }) => {
  const { playlists, addSongToPlaylist } = useContext(PlaylistContext);
  const { playWithId } = useContext(PlayerContext); // Obtener la función de reproducción
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState("");

  // Función para manejar la reproducción de la canción
  const handleSongClick = () => {
    playWithId(id); // Reproducir la canción usando su ID
  };

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlaylist("");
  };

  // Función para manejar el agregado a la playlist seleccionada
  const handleAddToPlaylist = () => {
    if (selectedPlaylist) {
      const song = { id, name, image, desc };
      addSongToPlaylist(selectedPlaylist, song);
      closeModal(); // Cerrar el modal después de agregar la canción
    } else {
      alert("Please select a playlist.");
    }
  };

  return (
    <div
      className="min-w-[150px] p-2 rounded cursor-pointer hover:bg-[#ffffff26]"
      onClick={handleSongClick}
    >
      <img className="rounded" src={image} alt="" />
      <div className="mt-2">
        <p className="font-bold text-sm">{name}</p>
        <p className="text-slate-200 text-xs">{desc}</p>
      </div>
      <button
        className="mt-2 px-2 py-1 bg-green-500 text-white text-xs rounded"
        // Llamada para abrir el modal en el botón
        onClick={(e) => {
          e.stopPropagation(); // Previene la reproducción al hacer clic en el botón
          openModal();
        }}
      >
        Add to playlist
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#242424] p-6 rounded-lg w-80">
            <h2 className="text-white mb-4">Select Playlist</h2>
            <select
              className="w-full p-2 rounded text-black"
              value={selectedPlaylist}
              onChange={(e) => setSelectedPlaylist(e.target.value)} // Captura el valor de la opción seleccionada
            >
              <option value="">Choose a Playlist</option>
              {playlists.map((playlist) => (
                <option key={playlist.id} value={playlist.id}>
                  {playlist.name}
                </option>
              ))}
            </select>

            <div className="mt-4 flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded"
                onClick={handleAddToPlaylist}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

SongItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default SongItem;
