const outputDiv = document.getElementById("txt_layout");

let intervalID;
let i = 0;
let currentPara = 0;
let isTyping = false;
let splitted;
let paras;

function typeText(text) {

  clearInterval(intervalID);
  outputDiv.innerHTML = "";

  i = 0;
  currentPara = 0;
  isTyping = true;

  splitted = text.split("\n");

  splitted.forEach(() => {
    const p = document.createElement("p");
    outputDiv.appendChild(p);
  });

  paras = outputDiv.querySelectorAll("p");

  intervalID = setInterval(() => {

    if (currentPara >= splitted.length) {
      clearInterval(intervalID);
      // isTyping = false;
         const event = new CustomEvent('typingFinished');
            document.dispatchEvent(event);
      return; 
    }

    const line = splitted[currentPara];

    if (line && i < line.length) {
      paras[currentPara].innerHTML += line[i];
      i++;
    } else {
      currentPara++;
      i = 0;
    }

  }, 30);

  

}

function skipTyping() {

  clearInterval(intervalID);

  splitted.forEach((line, index) => {
    paras[index].innerHTML = line;
  });
  isTyping = false;
  const event = new CustomEvent('typingFinished');
            document.dispatchEvent(event);

}