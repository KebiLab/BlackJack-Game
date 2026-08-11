let firstCard = 6
let secondCard = 9
let sum = firstCard+secondCard

if (sum < 21){
    console.log('Do u want to draw a new card? 🙂')
} else if (sum === 21){
    console.log("Wohoo! You've got BlackJack 👑")
} else if (sum > 21){
    console.log('U lose 😭')
}

