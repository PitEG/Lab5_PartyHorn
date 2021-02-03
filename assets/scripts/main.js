// main.js

//elements
let volumeNumber    = document.getElementById('volume-number');
let volumeSlider    = document.getElementById('volume-slider');
let hornSound       = document.getElementById('horn-sound');
let hornSoundImage  = document.getElementById('sound-image');
let audioSelector   = document.getElementById("audio-selection");
let radioAirHorn    = document.getElementById("radio-air-horn");
let radioCarHorn    = document.getElementById("radio-car-horn");
let radioPartyHorn  = document.getElementById("radio-party-horn");
let honkButton      = document.getElementById("honk-btn");

//event listeners
volumeNumber.addEventListener('input', VolumeNumberChange);
volumeSlider.addEventListener('input', VolumeSliderChange);
honkButton.onclick = PlayHornSound;

radioAirHorn.oninput = function() { 
  ChangeHornSound("./assets/media/audio/air-horn.mp3");
  ChangeHornImage("./assets/media/images/air-horn.svg")
};
radioCarHorn.oninput = function() { 
  ChangeHornSound("./assets/media/audio/car-horn.mp3");
  ChangeHornImage("./assets/media/images/car.svg")
};
radioPartyHorn.oninput = function() { 
  ChangeHornSound("./assets/media/audio/party-horn.mp3");
  ChangeHornImage("./assets/media/images/party-horn.svg")
};

//functions
function VolumeNumberChange() {
  hornSound.volume = volumeNumber.value / 100;
  volumeSlider.value = volumeNumber.value;
  VolumePictureChange();
}

function VolumeSliderChange() {
  hornSound.volume = volumeSlider.value / 100;
  volumeNumber.value = volumeSlider.value;
  VolumePictureChange();
}

function ChangeHornSound(path) {
  hornSound.src = path;
}

function ChangeHornImage(path) {
  hornSoundImage.src = path; 
}

function PlayHornSound() {
  hornSound.play();
  event.preventDefault();
}

// volume-level-3: 67-100
// volume-level-2: 34-66
// volume-level-1: 1-33
// volume-level-0: 0
function VolumePictureChange() {
  let volume = hornSound.volume;
  let volumeImage = document.getElementById("volume-image");
  if(volume == 0.0) {
    volumeImage.src = "./assets/media/icons/volume-level-0.svg";
  }
  else if (volume < .34) {
    volumeImage.src = "./assets/media/icons/volume-level-1.svg";
  }
  else if (volume < .67) {
    volumeImage.src = "./assets/media/icons/volume-level-2.svg";
  }
  else {
    volumeImage.src = "./assets/media/icons/volume-level-3.svg";
  }
}