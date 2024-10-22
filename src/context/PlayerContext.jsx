import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      seconds: 0,
      minutes: 0,
    },
    totalTime: {
      seconds: 0,
      minutes: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  // Función para reproducir una canción específica usando su ID
  const playWithId = (id) => {
    const song = songsData[id];
    setTrack(song);
    audioRef.current.src = song.file; // Cambia la fuente
    audioRef.current.play(); // Reproduce la canción inmediatamente
    setPlayStatus(true);
  };

  const previous = () => {
    if (track.id > 0) {
      const newTrack = songsData[track.id - 1];
      setTrack(newTrack);
      audioRef.current.src = newTrack.file; // Cambia la fuente
      audioRef.current.play(); // Reproduce la canción anterior
      setPlayStatus(true);
    }
  };

  const next = () => {
    if (track.id < songsData.length - 1) {
      const newTrack = songsData[track.id + 1];
      setTrack(newTrack);
      audioRef.current.src = newTrack.file; // Cambia la fuente
      audioRef.current.play(); // Reproduce la canción siguiente
      setPlayStatus(true);
    }
  };

  const seekSong = (e) => {
    audioRef.current.currentTime = (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration;
  };

  useEffect(() => {
    const handleTimeUpdate = () => {
      seekBar.current.style.width = `${
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      }%`;
      setTime({
        currentTime: {
          seconds: Math.floor(audioRef.current.currentTime % 60),
          minutes: Math.floor(audioRef.current.currentTime / 60),
        },
        totalTime: {
          seconds: Math.floor(audioRef.current.duration % 60),
          minutes: Math.floor(audioRef.current.duration / 60),
        },
      });
    };

    const handleEnded = () => {
      next(); // Reproduce la siguiente canción cuando la actual termine
    };

    const handleLoadedData = () => {
      if (playStatus) {
        audioRef.current.play(); // Asegúrate de reproducir si está en estado de reproducción
      }
    };

    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    audioRef.current.addEventListener('ended', handleEnded); // Agrega el evento ended
    audioRef.current.addEventListener('loadeddata', handleLoadedData); // Agrega el evento loadeddata

    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.removeEventListener('ended', handleEnded); // Limpia el evento
      audioRef.current.removeEventListener('loadeddata', handleLoadedData); // Limpia el evento
    };
  }, [audioRef, track, playStatus]); // Agrega track y playStatus a las dependencias

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
      <audio ref={audioRef} src={track.file} preload='auto' /> {/* Asegúrate de tener este audio aquí */}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
