let hasBlackJack = false;
let isAlive = false;
let sum = 0;
let message = "";
let allCurrentCards = [];

let player = {
    alias: "Gunner",
    chips: 145 
}

let playerEl = document.querySelector("#player-el");
playerEl.textContent = `${player.alias}: $${player.chips}`;

let startButtonEl = document.querySelector("#start-button");
let messageEl = document.querySelector("#message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let newCardButtonEl = document.querySelector("#newcard-button");

startButtonEl.addEventListener("click", startGame);
newCardButtonEl.addEventListener("click", newCard);



function startGame() {
    if (!isAlive) {
    isAlive = true;
    hasBlackJack = false;

    let firstCard = randomCard();
    let secondCard = randomCard();
    allCurrentCards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();

    } else if (isAlive && !hasBlackJack) {
        messageEl.textContent = "Game already in progress!"
    }
};

function renderGame() {
        cardsEl.textContent = `Cards:`;

        allCurrentCards.forEach( (card) => {
            cardsEl.textContent += ` ${card}`;
        });

        sumEl.textContent = `Sum: ${sum}`;

        if (sum < 21) {
            message = "Do you want to draw a new card?";
        } else if (sum === 21) {
            message = "Wooooohoo! You've got Blackjack bebe!";
            hasBlackJack = true;
            isAlive = false;//test
        } else { 
            message = "You're out of the game!";
            isAlive = false;
        };
        
        messageEl.textContent = message;
};

function newCard() {
    if (hasBlackJack && !isAlive) {
        messageEl.textContent = "You've already won!";
    } else if (isAlive && !hasBlackJack) {
        let card = randomCard();
        sum += card;
        allCurrentCards.push(card);
        renderGame();
    } else if (sum === 0) {
        messageEl.textContent = "Start the game first!"; 
    } else if (!isAlive){
        messageEl.textContent = "No more cards for you!";
    }
};

function randomCard() {
    let bjArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let randomIndex = Math.floor(Math.random() * bjArray.length);
    let result = bjArray[randomIndex];
    console.log(result);
    return result;
};
