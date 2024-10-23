import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PlaylistContext } from "../context/PlaylistContext";
import { PlayerContext } from "../context/PlayerContext"; // Importar el contexto del reproductor

const Playlist = () => {
    const { id } = useParams();
    const { playlists } = useContext(PlaylistContext);
    const { playWithId } = useContext(PlayerContext); // Obtener la función de reproducción

    const playlist = playlists.find((playlist) => playlist.id === parseInt(id));
    
    const handlePlaySong = (index) => {
        playWithId(playlist.songs[index].id); // Reproducir la canción por su ID
    };

    return (
        <div className="p-4 bg-[#121212] h-full">
            <h1 className="text-white text-2xl mb-4">{playlist.name}</h1>
            {playlist.songs.length > 0 ? (
                playlist.songs.map((song, index) => (
                    <div 
                        key={index} 
                        className="bg-[#1e1e1e] p-2 mb-2 rounded cursor-pointer" 
                        onClick={() => handlePlaySong(index)} // Agregar el manejador de clic
                    >
                        <h2 className="text-white">{song.name}</h2>
                        <p className="text-gray-400">{song.desc}</p>
                    </div>
                ))
            ) : (
                <p className="text-gray-400">No songs available.</p>
            )}
        </div>
    );
};

export default Playlist;
