let state = {}
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')



function startGame() {
  state = {}
  showTextNode(1)
}


function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerHTML = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const choice = document.createElement('span')
      choice.innerText = option.text
      choice.classList.add('choice')
      choice.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(choice)
    }
  })
}


function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}


function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}


const textNodes = [
  {
    id: 1,
    text: "You wake up in a cold apartment",
          "No food. No money.",
          "The phone keeps ringing..."
    options: [
      {
        text: 'Take the goo',
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text: 'Leave the goo',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: '',
    options: 
  }
];