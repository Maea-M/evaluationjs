/*
GlobalPlayer = array to get scores of 2 players, 
id = globalScore-1 globalScore-2
roundScore =  score by set,
id= current-1 and current-2
activePlayer = player 1 ou 2,
id= player-1 and player-2
launchGame =  true if begin
*/
let globalPlayer, roundScore, activePlayer, launchGame;

/*make  const for buttons and dice
id dice =  diceImg
id button new game = newGame
id button roll the dice = rollDice
id button hold = hold
*/
const dice = document.querySelector('#diceImg');
const newGame = document.querySelector('#newGame');
const rollDice = document.querySelector('#rollDice');
const hold = document.querySelector('#hold');

/* 
1/ when we click on the button NewGame, scores goes to 0, player1 is active
*/
function beginGame() {
    globalPlayer = [0, 0];
    roundScore = 0;
    activePlayer = '0';
    launchGame = true;
}
beginGame()

/*function changer player :  roundScore goes to 0, 
player became inactive 
currentScore goes to 0
*/
function nextPlayer(){
    roundScore = 0;

    if (activePlayer === '0') {
        activePlayer = '1';
    } else activePlayer = '0';

    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.querySelector(".player-One-Container").classList.toggle("active");
    document.querySelector(".player-Two-Container").classList.toggle("active");
}

/*2/When we click on the button ROllDice*/
rollDice.addEventListener('click', ()=>{
    if (launchGame) {
        /*number random is generate by the dice*/
        let dice = Math.floor(Math.random()* 6 ) + 1 ;
    
        /*- dice must change face*/
        let image = document.querySelector("#diceImg");
        image.src = `images/face-${dice}.png`;
    
        /*Lorsque la valeur du dé vaut 1:
        - le score round goes to zero*/
        if (dice !== 1){
        roundScore += dice;
        document.getElementById(`current-${activePlayer}`).textContent = roundScore;
        console.log(roundScore)
        /*- next player*/
        } else{
        nextPlayer();
        }
    }
});
    
    /*3/When we click on the button Hold*/

hold.addEventListener('click', () =>{
    if (launchGame) {
    /*- Add current score to global player's score*/
        globalPlayer [activePlayer] += roundScore; 
        document.getElementById(`globalScore-${activePlayer}`).textContent =
        globalPlayer [activePlayer];

    /*- Check if player's score is >= 100 */
    if (globalPlayer [activePlayer] >= 100) {
        launchGame = false;
        diceImg.classList.add('hidden');
        alert('Vous avez gagné!')
    } else {
        nextPlayer();
    }
    }
});