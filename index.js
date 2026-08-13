let firstCard = 11
let secondCard = 10
let sum = firstCard+secondCard
let hasBlackJack = false
let message = ""
let isAlive = true
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum')
let cardsEl = document.getElementById('cards')

function start(){
    sumEl.textContent = 'Sum: ' + sum
    cardsEl.textContent = 'Cards:  ' + firstCard + ' ' + secondCard
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
