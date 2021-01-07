const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new HangMan ('Madrid City', 7)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage
console.log(game1.status)


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
    console.log(game1.status)
})