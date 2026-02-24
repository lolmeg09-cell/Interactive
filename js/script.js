

const outputDiv = document.getElementById("txt_layout");


let intervalID;
let i = 0;
let currentPara = 0;
let isTyping = false;
let textIndex = 0;
let splitted;
let paras;



// Dialog
const txt = [
[
"You wake up in a cold apartment",
"No food. No money.",
"The phone keeps ringing..."
],
[
"You check your wallet.",
"Nothing.",
"Just an old receipt."
]
];



// Type
function typeText(text) {

  clearInterval(intervalID);
  outputDiv.innerHTML = "";

  i = 0;
  currentPara = 0;
  isTyping = true;

  splitted = text;

  splitted.forEach(() => {
    const p = document.createElement("p");
    outputDiv.appendChild(p);
  });

  paras = outputDiv.querySelectorAll("p");

  intervalID = setInterval(() => {

    paras[currentPara].innerHTML += splitted[currentPara][i];
    i++;

    if (i >= splitted[currentPara].length) {
      currentPara++;
      i = 0;

      if (currentPara >= splitted.length) {
        clearInterval(intervalID);
        isTyping = false;
      }
    }

  }, 50);
}


// Skip
function skipTyping() {

  clearInterval(intervalID);

  splitted.forEach((line, index) => {
    paras[index].innerHTML = line;
  });

  isTyping = false;
}


// Click
document.addEventListener("click", function () {

  if (isTyping) {
    skipTyping();
  }
  else {
    textIndex++;

    if (textIndex < txt.length) {
      typeText(txt[textIndex]);
    }
  }

});


// Start txt
typeText(txt[textIndex]);


