//card variables
let suits = ["Spades","Hearts","Diamonds","Clubs"];

let values = ["Ace","King","Queen","Jack","Ten","Nine","Eight","Seven","Six","Five","Four","Three","Two"];

//DOM variables
let textArea = document.getElementById("text-area");
let newGame = document.getElementById("new-game");
let hitButton = document.getElementById("hit-button");
let stayButton = document.getElementById("stay-button");

//Gamevariables
let gameStarted = false;
    gameOver = false;
    playerWon = false;
    dealerCards =[];
    playerCards =[];
    dealerScore = 0;
    playerScore = 0;
    deck = [];


hitButton.style.display = "none";
stayButton.style.display = "none";
showStatus();


newGame.addEventListener("click",function(){
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck =createDeck();
    shuffleDeck(deck);
    dealerCards = [getNextCard(),getNextCard()];
    playerCards = [getNextCard(),getNextCard()];


    newGame.style.display ="none";
    hitButton.style.display = "inline";
    stayButton.style.display = "inline";
    showStatus();
}); 


function createDeck(){
    let deck = [];
for (let suitIx = 0;suitIx<suits.length; suitIx++){
    for(let valueIx = 0;valueIx <values.length; valueIx++){
        let card ={
            suit: suits[suitIx],
            value: values[valueIx]
        };
        deck.push(card)
    }
   
}
return deck;
}

function showStatus(){
    if(!gameStarted){
        textArea.innerText = "Welcome to Blackjack";
        return;
    }
    for (var i=0; i<deck.length; i++){
        textArea.innerText +="\n" + getCardString(deck[i]);
    }
}

function shuffleDeck(deck){
    for(let i = 0; i<deck.length; i++){
        let swapId = Math.trunc(Math.random() * deck.length);
        let tmp = deck[swapId];
        deck[swapId] = deck[i];
        deck[i] = tmp;
    }
}

function getCardString(card){
    return card.value + " of " + card.suit;
}

function getNextCard(){
    return deck.shift();
}
let deck = createDeck();

let playerCards = [getNextCard(), getNextCard()];


console.log("Welcome to Blackjack");
console.log("You are dealt with:");
console.log(" " + getCardString(playerCards [1])  );
console.log(" " + getCardString(playerCards[2]));  


