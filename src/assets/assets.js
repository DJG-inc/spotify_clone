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

import song1 from  './songs/song1.mp3'
import song2 from  './songs/song2.mp3'
import song3 from  './songs/song3.mp3'

import divide from './divide_album.jpeg'
import nostalgia from './nostalgia_album.jpeg'
import scorpion from './scorpion_album.jpeg'
import lonely from './lonely_album.jpeg'
import after from './after_album.jpeg'

import shape from './shape_of_you_song.jpeg'
import castle from './castle_song.jpeg'
import galway from './galway_song.jpeg'
import perfect from './perfect_song.jpeg'
import happier from './happier_song.jpeg'
import dont_start from './dont_start_song.jpeg'
import physical from './physical_song.jpeg'
import levitating from './levitating_song.jpeg'
import breaks from './break_song.jpeg'
import hallucinate from './hallucinate_song.jpeg'
import stay from './stay_song.jpeg'
import only_one from './only_one_song.jpeg'
import lay from './lay_song.jpeg'
import like from './like_song.jpeg'
import leave from './leave_song.jpeg'

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
        id: 0,
        name: "Divide",
        artist: "Ed Sheeran",
        genre: "Pop",
        image: divide,
        desc: "An album by Ed Sheeran with his top songs.",
        bgColor: "#4a5568"
    },
    {   
        id: 1,
        name: "Future Nostalgia",
        artist: "Dua Lipa",
        genre: "Pop",
        image: nostalgia,
        desc: "An album by Dua Lipa featuring popular dance-pop tracks.",
        bgColor: "#6b46c1"
    },
    {   
        id: 2,
        name: "Scorpion",
        artist: "Drake",
        genre: "Hip-Hop",
        image: scorpion,
        desc: "An album by Drake showcasing top hip-hop hits.",
        bgColor: "#2c7a7b"
    },
    {   
        id: 3,
        name: "In the Lonely Hour",
        artist: "Sam Smith",
        genre: "Pop/Soul",
        image: lonely,
        desc: "An album by Sam Smith filled with soulful ballads.",
        bgColor: "#b7791f"
    },
    {   
        id: 4,
        name: "After Hours",
        artist: "The Weeknd",
        genre: "R&B",
        image: after,
        desc: "An album by The Weeknd with dark and moody tracks.",
        bgColor: "#9b2c2c"
    },
];



export const songsData = [
    {
        id: 0,
        name: "Shape of You",
        album: "Divide",
        artist: "Ed Sheeran",
        genre: "Pop",
        image: shape,
        file: song1,
        desc: "A catchy tune by Ed Sheeran from the album Divide.",
        duration: "3:53",
        videoUrl: "https://www.youtube.com/embed/JGwWNGJdvx8?si=alVAcLEXio4UmGFH",
    },
    {
        id: 1,
        name: "Castle on the Hill",
        album: "Divide",
        artist: "Ed Sheeran",
        genre: "Pop",
        image: castle,
        file: song2,
        desc: "An inspiring track about Ed Sheeran's roots.",
        duration: "4:21",
        videoUrl: "https://www.youtube.com/embed/K0ibBPhiaG0?si=40pOorp6bj8xdzIE",
    },
    {
        id: 2,
        name: "Galway Girl",
        album: "Divide",
        artist: "Ed Sheeran",
        genre: "Pop",
        image: galway,
        file: song3,
        desc: "A lively track with Irish influences.",
        duration: "2:50",
        videoUrl: "https://www.youtube.com/embed/87gWaABqGYs?si=S6pc6nwUwAelx8SR",
    },
    {
        id: 3,
        name: "Perfect",
        album: "Divide",
        artist: "Ed Sheeran",
        genre: "Pop",
        image: perfect,
        file: song1,
        desc: "A romantic ballad from Ed Sheeran.",
        duration: "4:23",
        videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g?si=4RSfMql6O0CxH0bI",
    },
    {
        id: 4,
        name: "Happier",
        album: "Divide",
        artist: "Ed Sheeran",
        genre: "Pop",
        image: happier,
        file: song1,
        desc: "A melancholic song about love and loss.",
        duration: "3:27",
        videoUrl: "https://www.youtube.com/embed/iWZmdoY1aTE?si=iSFhv1YyGVys8C44",
    },
    
    // Dua Lipa - Future Nostalgia (falta url de video)
    {
        id: 5,
        name: "Don't Start Now",
        album: "Future Nostalgia",
        artist: "Dua Lipa",
        genre: "Pop",
        image: dont_start,
        file: song1,
        desc: "A dance-pop anthem by Dua Lipa.",
        duration: "3:03",
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c?si=bPn1D7euIxaOwR_3",
    },
    {
        id: 6,
        name: "Physical",
        album: "Future Nostalgia",
        artist: "Dua Lipa",
        genre: "Pop",
        image: physical,
        file: song1,
        desc: "A high-energy track to get you moving.",
        duration: "3:13",
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c?si=bPn1D7euIxaOwR_3",
    },
    {
        id: 7,
        name: "Levitating",
        album: "Future Nostalgia",
        artist: "Dua Lipa",
        genre: "Pop",
        image: levitating,
        file: song1,
        desc: "A catchy tune featuring nostalgic vibes.",
        duration: "3:23",
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c?si=bPn1D7euIxaOwR_3",
    },
    {
        id: 8,
        name: "Break My Heart",
        album: "Future Nostalgia",
        artist: "Dua Lipa",
        genre: "Pop",
        image: breaks,
        file: song1,
        desc: "A song about taking risks in love.",
        duration: "3:41",
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c?si=bPn1D7euIxaOwR_3",
    },
    {
        id: 9,
        name: "Hallucinate",
        album: "Future Nostalgia",
        artist: "Dua Lipa",
        genre: "Pop",
        image: hallucinate,
        file: song1,
        desc: "A vibrant track by Dua Lipa.",
        duration: "3:29",
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c?si=bPn1D7euIxaOwR_3",
    },

    // Drake - Scorpion (falta url de video)
    {
        id: 10,
        name: "God's Plan",
        album: "Scorpion",
        artist: "Drake",
        genre: "Hip-Hop",
        image: scorpion,
        file: song1,
        desc: "A hit song by Drake about success and faith.",
        duration: "3:19",
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c?si=bPn1D7euIxaOwR_3",
    },
    {
        id: 11,
        name: "In My Feelings",
        album: "Scorpion",
        artist: "Drake",
        genre: "Hip-Hop",
        image: scorpion,
        file: song1,
        desc: "A popular track with an infectious beat.",
        duration: "3:38",
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c?si=bPn1D7euIxaOwR_3",
    },
    {
        id: 12,
        name: "Nonstop",
        album: "Scorpion",
        artist: "Drake",
        genre: "Hip-Hop",
        image: scorpion,
        file: song1,
        desc: "A powerful song showcasing Drake's style.",
        duration: "3:58",
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c?si=bPn1D7euIxaOwR_3",
    },
    {
        id: 13,
        name: "Nice for What",
        album: "Scorpion",
        artist: "Drake",
        genre: "Hip-Hop",
        image: scorpion,
        file: song1,
        desc: "A tribute to women's empowerment.",
        duration: "3:30",
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c?si=bPn1D7euIxaOwR_3",
    },
    {
        id: 14,
        name: "Mob Ties",
        album: "Scorpion",
        artist: "Drake",
        genre: "Hip-Hop",
        image: scorpion,
        file: song1,
        desc: "A track with a gritty, trap-influenced beat.",
        duration: "3:25",
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c?si=bPn1D7euIxaOwR_3",
    },

    // Sam Smith - In the Lonely Hour (falta url de video)
    {
        id: 15,
        name: "Stay With Me",
        album: "In the Lonely Hour",
        artist: "Sam Smith",
        genre: "Pop/Soul",
        image: stay,
        file: song1,
        desc: "A soulful ballad by Sam Smith.",
        duration: "2:52",
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c?si=bPn1D7euIxaOwR_3",
    },
    {
        id: 16,
        name: "I'm Not the Only One",
        album: "In the Lonely Hour",
        artist: "Sam Smith",
        genre: "Pop/Soul",
        image: only_one,
        file: song1,
        desc: "A heartbreaking song about betrayal.",
        duration: "3:59",
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c?si=bPn1D7euIxaOwR_3",
    },
    {
        id: 17,
        name: "Lay Me Down",
        album: "In the Lonely Hour",
        artist: "Sam Smith",
        genre: "Pop/Soul",
        image: lay,
        file: song1,
        desc: "An emotional song by Sam Smith.",
        duration: "3:39",
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c?si=bPn1D7euIxaOwR_3",
    },
    {
        id: 18,
        name: "Like I Can",
        album: "In the Lonely Hour",
        artist: "Sam Smith",
        genre: "Pop/Soul",
        image: like,
        file: song1,
        desc: "A powerful song about love and resilience.",
        duration: "2:47",
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c?si=bPn1D7euIxaOwR_3",
    },
    {
        id: 19,
        name: "Leave Your Lover",
        album: "In the Lonely Hour",
        artist: "Sam Smith",
        genre: "Pop/Soul",
        image: leave,
        file: song2,
        desc: "A poignant song about unrequited love.",
        duration: "3:08",
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c?si=bPn1D7euIxaOwR_3",
    }
];
