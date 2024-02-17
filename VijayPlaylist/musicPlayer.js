var currentSongIndex = 0;
var audioPlayer = new Audio();
var initialSongPlayed = false;
let pausedSongIndex = null;

function playSong(songUrl, linkElement) {
    console.log('Playing song:', songUrl); // Add this line for debugging
    audioPlayer.src = songUrl;
    audioPlayer.play();
    var playlistItems = document.querySelectorAll('.sidenav a');
    playlistItems.forEach(item => item.classList.remove('active'));
    linkElement.classList.add('active');
    document.getElementById('current-song').textContent = linkElement.textContent;
    // Get song details and update the song details element
    var currentSong = songs.find(song => song.audioUrl === songUrl);
    updateSongDetails(currentSong);

    // Update the current song index
    currentSongIndex = songs.findIndex(song => song.audioUrl === songUrl);

    showPauseButton(); // Show pause button after starting to play the song
}

function updateCurrentSongInfo() {
    var currentSong = songs[currentSongIndex];
    document.getElementById('current-song').textContent = currentSong.songName;
    var playlistItems = document.querySelectorAll('.sidenav a');
    playlistItems.forEach(item => item.classList.remove('active'));
    playlistItems[currentSongIndex].classList.add('active');
}

function updateSongDetails(song) {
    document.getElementById('current-song').textContent = song.songName;
    document.getElementById('song-details').textContent = `Movie: ${song.movieName} | Singer: ${song.singerName} | Duration: ${song.duration}`;
}

function playNextSong() {
    showPauseButton();
    if (currentSongIndex < songs.length - 1) {
        currentSongIndex++;
    } else {
        currentSongIndex = 0; // Loop back to the first song
    }
    updateCurrentSongInfo();
    pausedSongIndex = currentSongIndex; // Update pausedSongIndex
    var nextSongUrl = songs[currentSongIndex].audioUrl;
    var activeLink = document.querySelector('.sidenav a[href="#"][onclick*="' + nextSongUrl + '"]');
    playSong(nextSongUrl, activeLink);
}

function playPreviousSong() {
    showPauseButton();
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateCurrentSongInfo();
    pausedSongIndex = currentSongIndex; // Update pausedSongIndex
    var previousSongUrl = songs[currentSongIndex].audioUrl;
    var activeLink = document.querySelector('.sidenav a[href="#"][onclick*="' + previousSongUrl + '"]');
    playSong(previousSongUrl, activeLink);
}

function updateActiveNavItem(index) {
    var playlistItems = document.querySelectorAll('.sidenav a');
    playlistItems.forEach(item => item.classList.remove('active'));
    playlistItems[index].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    // This code will run when the page has finished loading
    playSong(songs[0].audioUrl, document.querySelector('.sidenav a[href="#"][onclick*="' + songs[0].audioUrl + '"]'));
    initialSongPlayed = true;
    // Show play or pause button based on initial state of the audio player
    if (audioPlayer.paused) {
        showPlayButton();
    } else {
        showPauseButton();
    }
});

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        showPauseButton();
    } else {
        audioPlayer.pause();
        showPlayButton();
    }
}

function playPausedSong() {
    if (pausedSongIndex !== null) {
        playSong(songs[pausedSongIndex].audioUrl, document.querySelector('.sidenav a[href="#"][onclick*="' + songs[pausedSongIndex].audioUrl + '"]'));
    }
}

function playCurrentSong() {
    if (!audioPlayer.src) {
        audioPlayer.src = playlist[currentIndex].getAttribute('href');
        currentSong.textContent = playlist[currentIndex].textContent;
    }
    audioPlayer.play();
}

function showPlayButton() {
    var playPauseButton = document.getElementById('play-pause-button');
    playPauseButton.innerHTML = '<i class="fas fa-play" style="font-size: 25px;"></i>';
    playPauseButton.style.color = '#fff';
    playPauseButton.style.border = 'none';
    playPauseButton.style.borderRadius = '50%';
    playPauseButton.style.width = '60px';
    playPauseButton.style.height = '60px';
    playPauseButton.style.margin = '0 5px';
    playPauseButton.style.cursor = 'pointer';
}

function showPauseButton() {
    var playPauseButton = document.getElementById('play-pause-button');
    playPauseButton.innerHTML = '<i class="fas fa-pause" style="font-size: 25px;"></i>';
    playPauseButton.style.color = '#fff';
    playPauseButton.style.border = 'none';
    playPauseButton.style.borderRadius = '50%';
    playPauseButton.style.width = '60px';
    playPauseButton.style.height = '60px';
    playPauseButton.style.margin = '0 5px';
    playPauseButton.style.cursor = 'pointer';
} 
