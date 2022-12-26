let globalPlayer, roundScore, activePlayer  
const diceGenerate = document.getElementById("diceGenerate");
let diceArray = ['face1.png', 'face2.png', 'face3.png', 'face4.png', 'face5.png', 'face6.png'];

/* 
1/ lorsqu'on clique sur le boutton NewGame, les scores sont remis à 0, player1 est actif
*/
function beginGame() {
    globalPlayer = [0,0];
    roundScore = 0;
    activePlayer = 'player1';
    launchGame = true;
}
const newGame = document.getElementById("newGame").addEventListener("click", ()=>{
    beginGame()
}
);


/*function changer de joueur : le roundScore revient à 0, 
le joueur inactif veient actif
le currentScore revient à 0
*/
function nextPlayer(){
    roundScore = 0;

    if (activePlayer === 'player1') {
        activePlayer = 'player2';
    }else activePlayer = 'player1';

    document.getElementById("currentScoreOne").textContent = 0;
    document.getElementById("currentScoreTwo").textContent = 0;
    document.querySelector(".player-One-Container").classList.toggle("active");
    document.querySelector(".player-Two-Container").classList.toggle("active");
    document.querySelector("#diceImg").style.display = "block";
}

/*2/Lorsqu'on clique sur ROllDice*/
const rollDice = document.getElementById("rollDice").addEventListener("click", ()=>{
    /*un nombre aléatoire est généré par le dé*/
    let dice = Math.floor(Math.random()* 6 ) + 1 ;
    console.log(dice);

    /*- le dé doit changer de face*/
    let image = document.getElementById("diceImg")
    image.scr = `images/face${dice}.png`;

    /*Lorsque la valeur du dé vaut 1:
    - le score round revient à zéro
    - c'est au tour de l'autre joueur de lancer*/
    if (dice !== 1){
        roundScore += dice;
    } else{
        nextPlayer();
    }
}
);

/*3/Lorsqu'on clique sur le boutton Hold*/
const hold = document.getElementById("hold").addEventListener("click", ()=>{
    /*les rounds du player sont envoyés dans le global*/
    globalPlayer += roundScore;

    /*c'est au tour de l'autre joueur de lancer*/
    nextPlayer();
}
);




/*5/Lorsqu'un joueur arrive à 100:
- la partie est gagnée
- on ne peut plus continuer à jouer
*/