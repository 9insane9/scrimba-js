function randomCard() {
    let bjArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let randomIndex = Math.floor(Math.random() * bjArray.length);
    let result = bjArray[randomIndex];
    console.log(result);
    return result;
};

let firstCard = randomCard();
let secondCard = randomCard();
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

let allCurrentCards = [firstCard, secondCard];

let startButtonEl = document.querySelector("#start-button");
let messageEl = document.querySelector("#message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let newCardButtonEl = document.querySelector("#newcard-button");

function startGame() {
    renderGame();
};

function renderGame() {
    cardsEl.textContent = `Cards: ${allCurrentCards.toString()}`;
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
    //console.log("Drawing a new card from the deck!");
    let card = randomCard();
    sum += card;
    allCurrentCards.push(card);
    renderGame();
};

startButtonEl.addEventListener("click", startGame);
newCardButtonEl.addEventListener("click", newCard);



