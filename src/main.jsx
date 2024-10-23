import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PlayerContextProvider from "./context/PlayerContext.jsx";
import PlaylistContextProvider from "./context/PlaylistContext.jsx"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PlayerContextProvider>
        <PlaylistContextProvider> 
          <App />
        </PlaylistContextProvider>
      </PlayerContextProvider>
    </BrowserRouter>
  </StrictMode>
);
