// This is going to ask the player their age, like lots of online games and give a notice of approval or caution, depnding on the age.
var myAge = prompt("What is your age?");
if(myAge>=14){
  confirm("Play On");
}
else{
  alert("Play With Caution");
}
// This refrences and retrieves the correct ID elements
var images = document.getElementById("images");
var text = document.getElementById("text");
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('input');
var lalaland;
//The function resonsible for the switch from event one to event two via hitting enter
input.onkeypress = function(event) {
  if (event.key == "Enter" || event.keyCode == 13) {
    lalaland =  input.value;
    input.parentNode.removeChild(input)
    advanceTo(scenario.two)
  }
};

var changeText = function(words) {
  text.innerHTML = words.replace("Your name", lalaland);
};

var changeImage = function(img) {
  images.style.backgroundImage = "url(" + img + ")";
};

var changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  }
};

var advanceTo = function(s) {
  changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
};


scenario = {}
var scenario = {
  one: {
    image: "http://s13.favim.com/610/160208/80s-90s-aesthetic-alternative-Favim.com-3971633.jpg", //this is not a dream image
    text: "You fell asleep again? Maybe? Someting feels different this time. What do you want your name to be?\n",
  },
  two: {
    image: "http://68.media.tumblr.com/aeb33ad960d3fdbce1dca3265970272b/tumblr_ohc57koLSp1tgfjkso3_500.gif", //underwater
    text: "Slowly the blackness of your vision reveals that you are actually underwater, it feel so real, but how? What do you want to do?",
    buttons: [["Try to Force Yourself Awake", "advanceTo(scenario.three)"],["Swim Forward Into the Dark", "advanceTo(scenario.four)"]]
  },
  three: {
    image: "https://i.ytimg.com/vi/bru4OrEJwFk/maxresdefault.jpg",
    text: "You feel yourself being dragged down, when you look to see what it is, your realize it is several jelly fish pulling you. Breathing is becoming more difficult.",
    buttons: [["Continue on Trying to Wake Yourself", "advanceTo(scenario.seven)"]]
  },
  four: {
    image: "https://www.hardcoregamer.com/wp-content/uploads/2015/08/Soma01.jpg",
    text: "You swim far into the dark, constantly suprised by how easy it is to breath underwater. This must be a dream...it's so strange. You keep swiming into the dark not knowing what else to do and too afraid to do anything but keep moving forward, when suddenly you see lights in front of you. Upon close insepction it seams to be some sort of underwater ship.",
    buttons: [["Try to Get the Ships Attention", "advanceTo(scenario.seven)"],["Stay Hidden in the Dark and Let it Pass On", "advanceTo(scenario.five)"]]
  },
  five: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "TO BE CONTINUED...",
    buttons: [["Follow your Dog Downstairs", "advanceTo(scenario.five)"],["Search the Kitchen for a knife", "advanceTo(scenario.five)"]]
  },
  six: {
    image: "",
    text: "",
    buttons: [["Follow your Dog Downstairs", "advanceTo(scenario.five)"],["Search the Kitchen for a knife", "advanceTo(scenario.five)"]]
  },
  seven: {
    image: "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/VGiBmTeaeilt7mgjb/game-over-retro-arcade-digital-blue-style-1_nngybqf7pg__F0000.png",
    text: "You Die.",
  }

};

advanceTo(scenario.one)
