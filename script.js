let songplay = document.getElementById("play");
let song = document.getElementById("song");
let progress = document.getElementById("progress");
let progress2 = document.getElementById("progress2");
let trackDuration = document.getElementById("end-time");
let trackCurrent = document.getElementById("current-time");
let displayPlayer = document.querySelector(".player");
let displayLyrics = document.querySelector(".lyrics");
let time = 0;

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;

    var min = Math.floor(progress.value / 60);
    var sec = Math.floor(progress.value % 60);
    if(sec < 10){
        sec = '0' + sec;
    }
    trackCurrent.textContent = min + ':' + sec;

    min = Math.floor(progress.max / 60);
    sec = Math.floor(progress.max % 60);
    if(sec < 10){
        sec = '0' + sec;
    }
    trackDuration.textContent = min + ':' + sec;

}

function lyrics(){
    displayPlayer.style.display = "none";
    displayLyrics.style.display = "inline";
}

function back(){
    displayPlayer.style.display = "flex";
    displayLyrics.style.display = "none";
}

function pauseplay(){

    progress.max = song.duration;
    progress.value = song.currentTime;

    var min = Math.floor(progress.value / 60);
    var sec = Math.floor(progress.value % 60);
    if(sec < 10){
        sec = '0' + sec;
    }
    trackCurrent.textContent = min + ':' + sec;

    min = Math.floor(progress.max / 60);
    sec = Math.floor(progress.max % 60);
    if(sec < 10){
        sec = '0' + sec;
    }
    trackDuration.textContent = min + ':' + sec;


    if(play.classList.contains("fa-pause")){
        song.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
        console.log("pause");
    }else{
        song.play();
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        console.log("play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
        time = progress.value;
        var min = Math.floor(progress.value / 60);
        var sec = Math.floor(progress.value % 60);
        if(sec < 10){
            sec = '0' + sec;
        }
        trackCurrent.textContent = min + ':' + sec;

        if(time >= 0 && time < 4){
            document.getElementById("l1").style.color = "white";
            document.getElementById("l2").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l3").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l4").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l5").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l6").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l7").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l8").style.color = "rgba(255, 255, 255, 0.05)";
        }
        if(time >=4 && time < 9){
            document.getElementById("l1").style.color = "white";
            document.getElementById("l2").style.color = "white";
            document.getElementById("l3").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l4").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l5").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l6").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l7").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l8").style.color = "rgba(255, 255, 255, 0.05)";
        }
        if(time >=9 && time < 12){
            document.getElementById("l1").style.color = "white";
            document.getElementById("l2").style.color = "white";
            document.getElementById("l3").style.color = "white";
            document.getElementById("l4").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l5").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l6").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l7").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l8").style.color = "rgba(255, 255, 255, 0.05)";
        }
        if(time >=12 && time < 17){
            document.getElementById("l1").style.color = "white";
            document.getElementById("l2").style.color = "white";
            document.getElementById("l3").style.color = "white";
            document.getElementById("l4").style.color = "white";
            document.getElementById("l5").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l6").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l7").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l8").style.color = "rgba(255, 255, 255, 0.05)";
        }
        if(time >=17 && time < 21){
            document.getElementById("l2").style.color = "white";
            document.getElementById("l3").style.color = "white";
            document.getElementById("l4").style.color = "white";
            document.getElementById("l5").style.color = "white";
            document.getElementById("l6").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l7").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l8").style.color = "rgba(255, 255, 255, 0.05)";
        }
        if(time >=21 && time < 25){
            document.getElementById("l2").style.color = "white";
            document.getElementById("l3").style.color = "white";
            document.getElementById("l4").style.color = "white";
            document.getElementById("l5").style.color = "white";
            document.getElementById("l6").style.color = "white";
            document.getElementById("l7").style.color = "rgba(255, 255, 255, 0.05)";
            document.getElementById("l8").style.color = "rgba(255, 255, 255, 0.05)";
        }
        if(time >=25 && time < 28){
            document.getElementById("l2").style.color = "white";
            document.getElementById("l3").style.color = "white";
            document.getElementById("l4").style.color = "white";
            document.getElementById("l5").style.color = "white";
            document.getElementById("l6").style.color = "white";
            document.getElementById("l7").style.color = "white";
            document.getElementById("l8").style.color = "rgba(255, 255, 255, 0.05)";
        }
        if(time >=28 && time < 32){
            document.getElementById("l2").style.color = "white";
            document.getElementById("l3").style.color = "white";
            document.getElementById("l4").style.color = "white";
            document.getElementById("l5").style.color = "white";
            document.getElementById("l6").style.color = "white";
            document.getElementById("l7").style.color = "white";
            document.getElementById("l8").style.color = "white";
        }

        if(Math.floor(song.currentTime) == Math.floor(song.duration)){
            progress.value = 0;
            trackCurrent.textContent = "0:00";
            play.classList.remove("fa-pause");
            play.classList.add("fa-play");
        }

    },500);
}

progress.onchange = function(){

    song.play();
    song.currentTime = progress.value;

    play.classList.add("fa-pause");
    play.classList.remove("fa-play");

    var min = Math.floor(progress.value / 60);
    var sec = Math.floor(progress.value % 60);

    if(sec < 10){
        sec = '0' + sec;
    }
    trackCurrent.textContent = min + ':' + sec;
}