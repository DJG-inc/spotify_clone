// components/Modal.js
import React from "react";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [playlistName, setPlaylistName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(playlistName);
    setPlaylistName(""); // Limpiar el campo después de enviar
    onClose(); // Cerrar el modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#121212] p-6 rounded shadow-lg w-[90%] max-w-md">
        <h2 className="text-white text-lg font-bold mb-4">Create a New Playlist</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter playlist name"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            className="w-full p-2 rounded bg-[#242424] text-white mb-4"
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Modal;
