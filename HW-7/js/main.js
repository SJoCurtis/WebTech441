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
    image: "https://s4.postimg.org/t1g20apst/261819008_d4316c1bdf_o.jpg",
    text: "A wild gang of rabid dogs are gaining on you. Against your better judgement you enter the creepy house for saftey. Your dog is whincing and may be injured.",
    buttons: [["continue", "advanceTo(scenario.four)"]]
  },
  four: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "Your dog has run, barking loudly, into the basement. You wonder what's down there. The door jammed when you slammed it behind you. You are going to need something to pry it back open",
    buttons: [["Follow your Dog Downstairs", "advanceTo(scenario.five)"],["Search the Kitchen for a knife", "advanceTo(scenario.five)"]]
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
    image: "",
    text: "",
    buttons: [["Follow your Dog Downstairs", "advanceTo(scenario.five)"],["Search the Kitchen for a knife", "advanceTo(scenario.five)"]]
  }

};

advanceTo(scenario.one)
