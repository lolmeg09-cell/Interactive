const optionButtonsElement = document.getElementById("option-buttons");
const choice = document.createElement("button")



function startGame() {
  

  const savedNode = localStorage.getItem("currentTextNode");
 

  if (savedNode) {
    showTextNode(parseInt(savedNode));
    console.log(savedNode);
  } else 
  
  showTextNode(1);

}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((node) => node.id === textNodeIndex);
  localStorage.setItem("currentTextNode", textNodeIndex); 
  console.log(localStorage.getItem("currentTextNode"));

  // const textNode = textNodes.find(node => node.id === textNodeIndex);

  // typeText(textNode.text);
    console.log(textNode.options);
    textNode.options.forEach((option) => {
      if (true) {
        const choice = document.createElement("span");
        choice.innerText = option.text;
        choice.classList.add("choice");

        choice.addEventListener("click", (e) => {
          e.stopPropagation();
          selectOption(option);
        });

        optionButtonsElement.appendChild(choice);
      }
    });
  // };

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  // textNode.options.forEach(option => {

  
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {

  if (isTyping) {
    skipTyping();
    return;
  }

  const nextTextNodeId = option.nextText;


  if (nextTextNodeId <= 0) {
    return setTimeout(startGame, 2000);
  }

  showTextNode(nextTextNodeId);
}


localStorage.clear();
console.log(localStorage.clear());
startGame();
