const songs = [
    'Gainey Dai.mp3',
    'Heros.mp3',
    'Kho Gaye Hum Kahan.mp3',
    'Main Rahoon Ya Na Rahoon.mp3',
    'Memories.mp3',
    'Samjhine mutu.mp3',
]
let list = document.createElement("ul");
songs.forEach((item) =>{
    
    let musicList = document.createElement("li");
    musicList.textContent = item;
    list.appendChild(musicList); 
})

let songLists = document.querySelector(".middle");
songLists.appendChild(list);

let listOfSongs = document.querySelectorAll("li");
listOfSongs.forEach((song) =>{
    song.addEventListener("click",()=>{
        let source = 'songs/'+song.textContent;
        player.src = source;
        player.load();
        player.play();
    })
})

function updateProgress(){
    let progressBar = document.querySelector("progress");
    if(player.currentTime>0){
        progressBar.value = (player.currentTime/player.duration)*100;
    }
    
}

function play_pause(){
    if(player.paused){
        document.querySelector(".fa").className = "fa fa-pause-circle fa-2x";
        player.play();
    }
    else{
        document.querySelector(".fa").className = "fa fa-play-circle fa-2x";
        player.pause();
    }
}

