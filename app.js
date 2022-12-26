let globalPlayer, roundScore, activePlayer  
const diceGenerate = document.getElementById("diceGenerate");
/* 
1/ lorsqu'on clique sur le boutton NewGame, les scores sont remis à 0
*/
const newGame = document.getElementById("newGame").addEventListener("click", ()=>{
    console.log(globalPlayer = 0);
}
);

/*function changer de joueur : le roundScore revient à 0, le joueur inactif veient actif*/
function nextPlayer(){
    roundScore = 0;
    if (activePlayer === 'player1') {
        activePlayer = 'player2';
    }else activePlayer = 'player1';
}
/*2/Lorsqu'on clique sur ROllDice:
- un nombre aléatoire est généré par le dé
- le dé doit changer de face*/
/*
4/Lorsque la valeur du dé vaut 1:
- le score round revient à zéro
- c'est au tour de l'autre joueur de lancer*/
const rollDice = document.getElementById("rollDice").addEventListener("click", ()=>{
    let dice = Math.floor(Math.random()* 6 ) + 1 ;
    console.log(dice);
    dice.innerHTML = diceGenerate;
    if (dice !== 1){
        roundScore += dice;
    } else{
        nextPlayer();
    }
}
);

/*3/Lorsqu'on clique sur le boutton Hold :
- les rounds du player sont envoyés dans le global
- c'est au tour de l'autre joueur de lancer
*/
const hold = document.getElementById("hold").addEventListener("click", ()=>{
    globalPlayer += roundScore;
    nextPlayer();
}
);




/*5/Lorsqu'un joueur arrive à 100:
- la partie est gagnée
- on ne peut plus continuer à jouer
*/