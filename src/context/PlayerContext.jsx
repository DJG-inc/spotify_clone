import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);

  const [isInfoSidebarVisible, setIsInfoSidebarVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState(""); // This will store the YouTube embed URL

  const toggleInfoSidebar = () => {
    setIsInfoSidebarVisible(!isInfoSidebarVisible);
  };

  const showVideo = (url) => {
    audioRef.current.pause();  // Pause the audio when switching to video mode
    setVideoUrl(url);  
    setIsVideoPlaying(true); 
  };
  

  const hideVideo = () => {
    setIsVideoPlaying(false); // Deactivate video mode
  };

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
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (!audioRef.current) return;
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
      next(); // Play the next song when the current one ends
    };

    const handleLoadedData = () => {
      if (playStatus && audioRef.current) {
        audioRef.current.play(); // Ensure playback resumes if still in play status
      }
    };

    // Only add event listeners if audioRef.current is defined
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("ended", handleEnded);
      audioRef.current.addEventListener("loadeddata", handleLoadedData);
    }

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        audioRef.current.removeEventListener("ended", handleEnded);
        audioRef.current.removeEventListener("loadeddata", handleLoadedData);
      }
    };

  }, [audioRef, track, playStatus]); // Dependencies to re-run this effect

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
    isInfoSidebarVisible,
    toggleInfoSidebar,
    isVideoPlaying,
    videoUrl,
    showVideo,
    hideVideo,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
      <audio ref={audioRef} src={track.file} preload="auto" />{" "}
      {/* Asegúrate de tener este audio aquí */}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
