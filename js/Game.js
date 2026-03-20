const optionButtonsElement = document.getElementById("option-buttons");




function startGame() {
   document.getElementById("localStorage_delet").addEventListener("click", () => {
    localStorage.clear();
    showTextNode(1);
  });
  

  const savedNode = localStorage.getItem("currentTextNode");
 

  if (savedNode) {
    showTextNode(parseInt(savedNode));
    console.log(savedNode);
  } else 
  
  showTextNode(1);

}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((node) => node.id === textNodeIndex);
  const fade = document.getElementById("fadeScreen");

  
  fade.style.transition = "opacity 0.1s";
  fade.style.opacity = 0;

  setTimeout(() => {
    
    fade.style.opacity = 1;
  }, 300);
  

  console.log(textNode);
  localStorage.setItem("currentTextNode", textNodeIndex); 
  console.log(localStorage.getItem("currentTextNode"));

  const imageContainer = document.getElementById("imgContainer");
    
  if (textNode.img) {
    imageContainer.innerHTML = `<img src="${textNode.img}" alt="">`;
  } else {
    imageContainer.innerHTML = ""; // clear image if none defined
  }

  
  console.log(textNode.options);
  
  const onTypingFinished = () => {
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }
    
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
 };

   while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }
  document.addEventListener("typingFinished", onTypingFinished);
 
 typeText(textNode.text);

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


startGame();
