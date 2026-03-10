const optionButtonsElement = document.getElementById("option-buttons");
const choice = document.createElement("button");

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((node) => node.id === textNodeIndex);

  console.log(optionButtonsElement);
  const onTypingFinished = () => {
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    console.log(textNode.options);
    textNode.options.forEach((option) => {
      if (showOption(option)) {
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

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  if (isTyping) {
    skipTyping();
    return;
  }

  const nextTextNodeId = option.nextText;

  if (option.setState) {
    state = Object.assign(state, option.setState);
  }

  if (nextTextNodeId <= 0) {
    return setTimeout(startGame, 2000);
  }

  showTextNode(nextTextNodeId);
}
