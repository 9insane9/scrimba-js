function randomCard() {
    let bjArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let randomIndex = Math.floor(Math.random() * bjArray.length);
    let result = bjArray[randomIndex];
    console.log(result);
    return result;
};



let hasBlackJack = false;
let isAlive = false;
let sum = 0;

let message = "";

let allCurrentCards = [];

let startButtonEl = document.querySelector("#start-button");
let messageEl = document.querySelector("#message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let newCardButtonEl = document.querySelector("#newcard-button");

function startGame() {
    isAlive = true;
    hasBlackJack = false;

    let firstCard = randomCard();
    let secondCard = randomCard();
    allCurrentCards = [firstCard, secondCard]
    sum = firstCard + secondCard;
   
    renderGame();
    
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
        } else { 
            message = "You're out of the game!";
            isAlive = false;
        };
        messageEl.textContent = message;
};

function newCard() {
    if (!isAlive) {
        messageEl.textContent = "No more cards for you!";
    } else if (isAlive && !hasBlackJack) {
    let card = randomCard();
    sum += card;
    allCurrentCards.push(card);
    renderGame();
    } else if (hasBlackJack){
        messageEl.textContent = "You've already won!"
    }
};

startButtonEl.addEventListener("click", startGame);
newCardButtonEl.addEventListener("click", newCard);
