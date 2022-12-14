let musicContainer = document.getElementById("music-container");
let playBtn = document.getElementById("play");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let audio = document.getElementById("audio");
let progress = document.getElementById("progress");
let progressContainer = document.getElementById("progress-container");
let title = document.getElementById("title");
let cover = document.getElementById("cover");

// songs
let songs = ["How You Like That", "Kill This Love", "SOLO", "WHISTLE"];

// index
let songIndex = 3;

// load song
loadSong(songs[songIndex]);

// loadSong
function loadSong(song) {
  console.log(song);
  title.innerText = song;
  cover.src = `./image/${song}.jpeg`;
  audio.src = `./music/${song}.mp3`;
}

// play
function playSong() {
  musicContainer.classList.add("play");
  // cách khác với innerHTML/innerText
  playBtn.querySelector("i.fa-solid").classList.remove("fa-play");
  playBtn.querySelector("i.fa-solid").classList.add("fa-pause");

  audio.play();
}

// pause
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fa-solid").classList.remove("fa-pause");
  playBtn.querySelector("i.fa-solid").classList.add("fa-play");

  audio.pause();
}

// previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
    loadSong(songs[songIndex]);
    playSong();
  }

// update progress
function updateProgress(event){
    // console.log(event);
    let currentTime = event.srcElement.currentTime;
    let duration = event.srcElement.duration;
    // console.log(currentTime, duration);

    let progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

// set progress
function setProgress(event){
    let width = this.clientWidth;
    // console.log(width);
    console.log(event);
    let clickX = event.offsetX;
    let duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

// event
playBtn.addEventListener("click", function(){
    let isPlaying = musicContainer.classList.contains('play')
    // "contains" sẽ check coi có class "play" ko. Nếu có cho True, ko thì False

    if(isPlaying){
        pauseSong();
    } else {
        playSong();
    }
});
document.body.addEventListener('keydown', function(event){
    let isPlaying = musicContainer.classList.contains("play");

    if (event.code === "Space"){
        if(isPlaying){
            pauseSong();
        } else {
            playSong();
        }
    }
});

audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", nextSong);

progressContainer.addEventListener("click", setProgress);
// change song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);


playSong();

