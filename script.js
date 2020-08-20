// question 1

const greenBgBtn = document.getElementById("bg");

greenBgBtn.onclick = function(){
  event.target.style.background = "green";
};

// question 2

const togglerBtn = document.querySelector(".toggler");
const togglerElement = document.querySelector(".togglee");


togglerBtn.onclick = function(){
  togglerElement.classList.toggle("extra");
};

// question 3

const dropDown = document.querySelector("select");
let paragraphContainer = document.querySelector(".paragraphs-container");

dropDown.onchange = function(){
  const selectValue = this.value - 1;
  paragraphContainer.innerHTML = "";
  for(let i = 0; i <= selectValue; i++){
    paragraphContainer.innerHTML += '<p class="content">This is a paragraph</p>';
  };
};

// question 4

const textArea = document.querySelector(".input")
const textAreaCounter = document.querySelector(".char-count b")

textArea.onkeyup = function(){
  console.log(event.target.value.length)
  let textAreaLength = event.target.value.length
  textAreaCounter.innerHTML = textAreaLength
}

// question 5

const bodyElement = document.querySelector("body")

function scrollTracker(){
  console.log(window.scrollY)

  if(window.scrollY > 30){
  document.body.classList.add("highlight")
  }
  else{
  document.body.classList.remove("highlight")
  }
}

window.onscroll = scrollTracker