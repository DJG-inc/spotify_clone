import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import playlist_icon from './playlist.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    playlist_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits,",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id: 0,
        name: "On & On",
        artist: "Cartoon",
        album: 0,  // Reference to the album (assuming albumData has corresponding IDs)
        image: img1,
        itsFavorite: false,
        file: song1,
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c?si=bPn1D7euIxaOwR_3",  // YouTube video embed URL
        desc: "A catchy tune to get you grooving.",
        duration: "3:28",
        releaseDate: "2021-09-15",
    },
    {
        id: 1,
        name: "Sky High",
        artist: "Elektronomia",
        album: 1,
        image: img2,
        itsFavorite: false,
        file: song2,
        videoUrl: "https://www.youtube.com/embed/TW9d8vYrVFQ?si=3pqpiWQH6eHs2qug",
        desc: "Feel the energy with this track!",
        duration: "3:54",
        releaseDate: "2021-08-10",
    },
    {
        id: 2,
        name: "Heroes Tonight",
        artist: "Artist Three",
        album: 2,
        image: img3,
        itsFavorite: false,
        file: song3,
        videoUrl: "https://www.youtube.com/embed/rt1p8Wztywc?si=xEgymtf_k2LWERbe",
        desc: "A soothing melody for relaxing moments.",
        duration: "3:29",
        releaseDate: "2021-07-01",
    },
    {
        id: 3,
        name: "Song Four",
        artist: "Artist One",
        album: 0,
        image: img4,
        file: song1,
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c?si=bPn1D7euIxaOwR_3",
        desc: "Energetic vibes to start your day.",
        duration: "2:50",
        releaseDate: "2021-06-18",
    },
    {
        id: 4,
        name: "Song Five",
        artist: "Artist Two",
        album: 1,
        image: img5,
        itsFavorite: false,
        file: song2,
        videoUrl: "https://www.youtube.com/embed/TW9d8vYrVFQ?si=3pqpiWQH6eHs2qug",
        desc: "Feel-good rhythms to lift your spirits.",
        duration: "3:10",
        releaseDate: "2021-05-22",
    },
    {
        id: 5,
        name: "Song Six",
        itsFavorite: false,
        artist: "Artist Four",
        album: 3,
        image: img14,
        file: song3,
        videoUrl: "https://www.youtube.com/embed/rt1p8Wztywc?si=xEgymtf_k2LWERbe",
        desc: "A catchy tune to make you move.",
        duration: "2:45",
        releaseDate: "2021-04-14",
    },
    {
        id: 6,
        name: "Song Seven",
        artist: "Artist One",
        album: 0,
        image: img7,
        itsFavorite: false,
        file: song1,
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c?si=bPn1D7euIxaOwR_3",
        desc: "Uplifting rhythms to put a smile on your face.",
        duration: "2:18",
        releaseDate: "2021-03-09",
    },
    {
        id: 7,
        name: "Song Eight",
        artist: "Artist Five",
        album: 4,
        image: img12,
        itsFavorite: false,
        file: song2,
        videoUrl: "https://www.youtube.com/embed/TW9d8vYrVFQ?si=3pqpiWQH6eHs2qug",
        desc: "Chill beats to wind down your day.",
        duration: "2:35",
        releaseDate: "2021-02-05",
    }
];
