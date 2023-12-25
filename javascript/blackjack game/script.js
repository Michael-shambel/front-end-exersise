let firstCard = 6
let secondCard = 3
let jackCard = [firstCard,secondCard]
let sum = firstCard + secondCard
let blackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message")
let cardsEl = document.getElementById("card")
//let sumEl = document.getElementById("Sum")
let sumEl = document.querySelector("#Sum")
function startGame(){
    renderGame()
}
function renderGame(){
    if (sum <= 20){
        message=("Do you want to draw a new card?");
    }else if(sum === 20){
        message=("WOOH!jacpot you won the game!")
        blackJack=true;
    }else{
        message=("you are outof the game")
        isAlive = false;
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: "+ sum
    cardsEl.textContent = "cards: " + jackCard[0] + " " + jackCard[1]
    //console.log(message)
}
function newCard(){
    let newCard1 = 12;
    sum = sum + newCard1
    renderGame()


}
