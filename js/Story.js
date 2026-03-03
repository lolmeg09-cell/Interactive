const textNodes = [

{
  id: 1,
  text: "Your apartment is rotting. Rent overdue. Fridge empty.\nA pill rests in your palm.",
  options: [
    { text: "Take it", setState: { addiction: 1 }, nextText: 2 },
    { text: "Hold back", setState: { hope: 1 }, nextText: 8 }
  ]
},

{
  id: 2,
  text: "Relief washes over you. Hunger disappears.\nBut reality waits outside.",
  options: [
    { text: "Go outside", nextText: 3 }
  ]
},

{
  id: 3,
  text: "A dealer stands beside a convenience store.\nYou have little money.",
  options: [
    { text: "Buy drugs", setState: { addiction: 2 }, nextText: 4 },
    { text: "Buy food", setState: { hope: 1 }, nextText: 6 }
  ]
},

{
  id: 4,
  text: "The high is weaker this time.",
  options: [
    { text: "Take more", setState: { addiction: 3 }, nextText: 5 },
    { text: "Sit down", nextText: 11 }
  ]
},

{
  id: 5,
  text: "Your body feels heavy.\nOver 100,000 people died of overdose in 2022.\nNearly 300 every day.",
  options: [
    { text: "Close your eyes", nextText: 28 }
  ]
},

{
  id: 6,
  text: "The burger tastes real.\nYou feel human again.",
  options: [
    { text: "Throw pill away", setState: { hope: 2 }, nextText: 9 },
    { text: "Take pill", nextText: 5 }
  ]
},

{
  id: 8,
  text: "You scroll your phone.\nHotlines. Job centers.",
  options: [
    { text: "Call for help", setState: { hope: 2 }, nextText: 9 },
    { text: "Give up", nextText: 2 }
  ]
},

{
  id: 9,
  text: "Withdrawal hurts.\nBut you're still standing.",
  options: [
    { text: "Search for work", nextText: 10 }
  ]
},

{
  id: 10,
  text: "Applications rejected.\n\"We'll call you.\"",
  options: [
    { text: "Keep trying", setState: { hope: 3 }, nextText: 12 },
    { text: "Walk toward old corner", nextText: 3 }
  ]
},

{
  id: 12,
  text: "You land a part-time job.",
  options: [
    { text: "Save money", nextText: 14 }
  ]
},

{
  id: 14,
  text: "You feel stability returning.",
  options: [
    { text: "Keep building", nextText: 26 }
  ]
},

{
  id: 26,
  text: "You stabilize.\nLow-income Americans fill opioid prescriptions at nearly double the rate of higher-income adults (10.2% vs 5.3%).\nYou break the pattern.",
  options: [
    { text: "Hope Ending", nextText: 30 }
  ]
},

{
  id: 28,
  text: "You stop breathing.",
  options: [
    { text: "Overdose Ending", setState: { overdose: true }, nextText: -1 }
  ]
},

{
  id: 30,
  text: "You rebuild. Small apartment. Honest work. Stability.\nRecovery Ending.",
  options: [
    { text: "Play Again", nextText: -1 }
  ]
}

];