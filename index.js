let firstCard = 11
let secondCard = 10
let sum = firstCard+secondCard
let hasBlackJack = false
let message = ""
let isAlive = true
let messageEl = document.getElementById('message-el')

function start(){
    if (sum <= 20){
        message = 'Do u want to draw a new card? 🙂'
    } else if (sum === 21){
        message = "Wohoo! You've got BlackJack 👑"
        hasBlackJack = true
    } else if (sum > 21){
        message = 'U lose 😭'
        isAlive = false
    }
    messageEl.textContent = message
}
