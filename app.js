/*
GlobalPlayer = tableau pour récupérer les scores des 2 joueurs, 
id = globalScore-1 globalScore-2
roundScore = le score par set,
id= current-1 et current-2
activePlayer = player 1 ou 2,
id= player-1 et player-2
launchGame =  vrai si lancé
*/
let globalPlayer, roundScore, activePlayer, launchGame;

/*faire des const pour bouttons et dé
id dé =  diceImg
id boutton nouvelle partie = newGame
id boutton lancer le dé = rollDice
id boutton tenir = hold
*/
const dice = document.querySelector('#diceImg');
const newGame = document.querySelector('#newGame');
const rollDice = document.querySelector('#rollDice');
const hold = document.querySelector('#hold');

/* 
1/ lorsqu'on clique sur le boutton NewGame, les scores sont remis à 0, player1 est actif
*/
function beginGame() {
    globalPlayer = [0, 0];
    roundScore = 0;
    activePlayer = '0';
    launchGame = true;
}
beginGame()

/*function changer de joueur : le roundScore revient à 0, 
le joueur inactif veient actif
le currentScore revient à 0
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

/*2/Lorsqu'on clique sur ROllDice*/
rollDice.addEventListener('click', ()=>{
    if (launchGame) {
        /*un nombre aléatoire est généré par le dé*/
        let dice = Math.floor(Math.random()* 6 ) + 1 ;
    
        /*- le dé doit changer de face*/
        let image = document.querySelector("#diceImg");
        image.src = `images/face-${dice}.png`;
    
        /*Lorsque la valeur du dé vaut 1:
        - le score round revient à zéro*/
        if (dice !== 1){
        roundScore += dice;
        document.getElementById(`current-${activePlayer}`).textContent = roundScore;
        console.log(roundScore)
        /*- c'est au tour de l'autre joueur de lancer*/
        } else{
        nextPlayer();
        }
    }
});
    
    /*3/Lorsqu'on clique sur le boutton Hold*/
hold.addEventListener("click", ()=>{
    if (launchGame) {
        /*les rounds du player sont envoyés dans le global*/
        globalPlayer [activePlayer] += roundScore;
        document.getElementById(`globalScore-${activePlayer}`).textContent =
        globalPlayer [activePlayer];
        console.log(globalPlayer)
        nextPlayer()
    } else { 
        
    };
    }
);

/*5/Lorsqu'un joueur arrive à 100:
- la partie est gagnée
- on ne peut plus continuer à jouer
*/

if (globalPlayer[activePlayer] >= 100) {
    alert ('vous avez gagné!')
    launchGame = false
    dice.classList.add('hidden');
    }
