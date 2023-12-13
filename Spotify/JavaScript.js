console.log('Welcome To Spotify');

// Initialize variables
let songindex = 0;
const totalSongs = 10; // Total number of songs in your playlist

// Initialize audio element
let audioElement = new Audio();
audioElement.addEventListener('ended', () => {
    songindex = (songindex + 1) % totalSongs;
    loadAndPlaySong();
});

// Initialize elements
let listPlayButton1 = document.getElementById('songItemPlay1');
let listPlayButton2 = document.getElementById('songItemPlay2');
let listPlayButton3 = document.getElementById('songItemPlay3');
let listPlayButton4 = document.getElementById('songItemPlay4');
let listPlayButton5 = document.getElementById('songItemPlay5');
let listPlayButton6 = document.getElementById('songItemPlay6');
let listPlayButton7 = document.getElementById('songItemPlay7');
let listPlayButton8 = document.getElementById('songItemPlay8');
let listPlayButton9 = document.getElementById('songItemPlay9');
let listPlayButton10 = document.getElementById('songItemPlay10');
let PlayButton = document.getElementById('masterPlay');
let Range = document.getElementById('MyProgressBar');
let GIF = document.getElementById('gif');

// Play/pause logic
PlayButton.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        PlayButton.classList.remove('fa-circle-play');
        PlayButton.classList.add('fa-circle-pause');
        GIF.style.opacity = 1;
    } else {
        audioElement.pause();
        PlayButton.classList.remove('fa-circle-pause');
        PlayButton.classList.add('fa-circle-play');
        GIF.style.opacity = 0;
    }
});

// Timeupdate logic
audioElement.addEventListener('timeupdate', () => {
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    Range.value = progress;
});

// Range change logic
Range.addEventListener('input', () => {
    const seekTime = (Range.value / 100) * audioElement.duration;
    audioElement.currentTime = seekTime;
});

// Forward and backward buttons
let forwardButton = document.getElementById('masterPlay3');
let backwardButton = document.getElementById('masterPlay1');

forwardButton.addEventListener('click', () => {
    songindex = (songindex + 1) % totalSongs;
    loadAndPlaySong();
});

backwardButton.addEventListener('click', () => {
    songindex = (songindex - 1 + totalSongs) % totalSongs;
    loadAndPlaySong();
});
listPlayButton1.addEventListener('click',()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.src='KingofKotha.mp3';
        audioElement.play();
        PlayButton.classList.remove('fa-circle-play');
        PlayButton.classList.add('fa-circle-pause');
        GIF.style.opacity = 1;

        const songTitle = document.getElementById('nameofsong');
        songTitle.textContent = 'King Of Kotha';
    }
    else{
        audioElement.pause();
        PlayButton.classList.remove('fa-circle-pause');
        PlayButton.classList.add('fa-circle-play');
        GIF.style.opacity = 0;
    }
})
listPlayButton2.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.src='Naa Ready.mp3';
        audioElement.play();
        PlayButton.classList.remove('fa-circle-play');
        PlayButton.classList.add('fa-circle-pause');
        GIF.style.opacity = 1;
        const songTitle = document.getElementById('nameofsong');
        songTitle.textContent = 'King Of Kotha';
    }
    else{
        audioElement.pause();
        PlayButton.classList.remove('fa-circle-pause');
        PlayButton.classList.add('fa-circle-play');
        GIF.style.opacity = 0;
    }
    // audioElement.src='Naa Ready.mp3';
    // audioElement.currentTime=0;
    // audioElement.play();
})
listPlayButton3.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.src='Toofan.mp3';
        audioElement.play();
        PlayButton.classList.remove('fa-circle-play');
        PlayButton.classList.add('fa-circle-pause');
        GIF.style.opacity = 1;

        const songTitle = document.getElementById('nameofsong');
        songTitle.textContent = 'King Of Kotha';
    }
    else{
        audioElement.pause();
        PlayButton.classList.remove('fa-circle-pause');
        PlayButton.classList.add('fa-circle-play');
        GIF.style.opacity = 0;
    }
    // audioElement.src='Naa Ready.mp3';
    // audioElement.currentTime=0;
    // audioElement.play();
})
listPlayButton4.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.src='Monster Song.mp3';
        audioElement.play();
        PlayButton.classList.remove('fa-circle-play');
        PlayButton.classList.add('fa-circle-pause');
        GIF.style.opacity = 1;

        const songTitle = document.getElementById('nameofsong');
        songTitle.textContent = 'King Of Kotha';
    }
    else{
        audioElement.pause();
        PlayButton.classList.remove('fa-circle-pause');
        PlayButton.classList.add('fa-circle-play');
        GIF.style.opacity = 0;
    }
    // audioElement.src='Naa Ready.mp3';
    // audioElement.currentTime=0;
    // audioElement.play();
})
listPlayButton5.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.src='Beliver.mp3';
        audioElement.play();
        PlayButton.classList.remove('fa-circle-play');
        PlayButton.classList.add('fa-circle-pause');
        GIF.style.opacity = 1;

        const songTitle = document.getElementById('nameofsong');
        songTitle.textContent = 'King Of Kotha';
    }
    else{
        audioElement.pause();
        PlayButton.classList.remove('fa-circle-pause');
        PlayButton.classList.add('fa-circle-play');
        GIF.style.opacity = 0;
    }
    // audioElement.src='Naa Ready.mp3';
    // audioElement.currentTime=0;
    // audioElement.play();
})
listPlayButton6.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.src='Heart Stereo.mp3';
        audioElement.play();
        PlayButton.classList.remove('fa-circle-play');
        PlayButton.classList.add('fa-circle-pause');
        GIF.style.opacity = 1;

        const songTitle = document.getElementById('nameofsong');
        songTitle.textContent = 'King Of Kotha';
    }
    else{
        audioElement.pause();
        PlayButton.classList.remove('fa-circle-pause');
        PlayButton.classList.add('fa-circle-play');
        GIF.style.opacity = 0;
    }
    // audioElement.src='Naa Ready.mp3';
    // audioElement.currentTime=0;
    // audioElement.play();
})
// Load and play song
function loadAndPlaySong() {
    const songPaths = [
        'KingofKotha.mp3',
        'Naa Ready.mp3',
        'Toofan.mp3',
        'Monster Song.mp3',
        // ... Repeat for all songs
    ];

    audioElement.src = songPaths[songindex];
    audioElement.currentTime = 0;
    audioElement.play();

    // Update the song name and other UI elements
    const songTitle = document.querySelector('nameofsong');
    const songNames = [
        'King Of Kotha',
        'Naa Ready(LEO)',
        'Toofan(KGF2)',
        'Monster Song(KGF2)',
        'Beliver',
        'Heart Stereo',
        // ... Repeat for all songs
    ];
    songTitle.textContent = songNames[songindex]; // You can replace this with the actual song name

    // ...
}

// Load and play the first song initially
loadAndPlaySong();
