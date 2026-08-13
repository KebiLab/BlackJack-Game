let cards = []
let sum = 0
let hasBlackJack = false
let message = ""
let isAlive = false
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum')
let cardsEl = document.getElementById('cards')

function startGame(){
    if (isAlive == false){
        isAlive = true
        hasBlackJack = false
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    }
    else{
        alert("Please finish this game to start a new one")
    }
}

function renderGame(){
    sumEl.textContent = 'Sum: ' + sum
    cardsEl.textContent = 'Cards:  '
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + ' '
    }
    
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

function getRandomCard(){
    let randomNum = Math.floor(Math.random()*13)+1
    if(randomNum > 10){
        return 10
    }
    else if(randomNum === 1){
        return 11
    }
    else{
        return randomNum
    }
}

function newCard(){
    if (isAlive){
        let card = getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
    else{
        alert('Please Start Game')
    }
}
