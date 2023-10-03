// GLOBAL VARIABLE
let coinFlip = Math.round(Math.random())

// PROMPT USER TO CHOOSE HEAD OR TAIL
let choice = prompt('Heads or Tails')
choice = choice.toLowerCase()

if (coinFlip < 1) {
    if (choice === 'heads') {
        alert(`The flip was heads and you chose heads...you win!`)
    } else {
        alert(`The flip was heads and you chose tails...you lose!`)
    }
} else if (coinFlip = 1) {
    if (choice === 'tails') {
        alert(`The flip was tails and you chose tails...you win!`)
    } else {
        alert(`The flip was tails and you chose heads...you lose!`)
    }
}