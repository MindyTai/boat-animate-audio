var front_audio=new
Audio("http://taira-komori.jpn.org/sound_os/nature01/storm_coming1.mp3");

var back_audio=new
Audio("http://taira-komori.jpn.org/sound_os/nature01/cicadas.mp3");

var frontStopped = false;
var backStopped = true;

var isFront = true;
var isMute = 1;

front_audio.play();

front_audio.addEventListener('ended', function() {
    if(!frontStopped){
        this.currentTime = 0;
        this.play();
    }
}, false); 

back_audio.addEventListener('ended', function() {
    if(!backStopped){
        this.currentTime = 0;
        this.play();
    }
}, false); 

$(".front").click(function(){
  isFront = false;
  frontStopped = true;
  front_audio.pause(); 
  
  if(isMute) {
    backStopped = false;
    back_audio.play();
  }  
});

$(".back").click(function(){
  isFront = true;
  backStopped = true;
  back_audio.pause();
  if(isMute) {
    frontStopped = false;
    front_audio.play();
  }
  
  var element = document.getElementById("myboat");
  var newone = element.cloneNode(true);
  element.parentNode.replaceChild(newone, element);
});



$(".stop").click(function(){
  if(isMute) {
    frontStopped = true;
    backStopped = true;
    front_audio.pause();
    back_audio.pause();
    $(this).text("🔊");
    isMute = 0;
  }
  else {
    if(isFront) {
        frontStopped = false;
        front_audio.play();
     }
     else {
       backStopped = false;
       back_audio.play();
     }
    $(this).text("🔇");
    isMute = 1;
  }
  
});