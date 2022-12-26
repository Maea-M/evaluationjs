let globalPlayer, roundScore, activePlayer,  

/* 
1/ lorsqu'on clique sur le boutton NewGame, les scores sont remis à 0
*/
let newGame = document.getElementById("newGame").addEventListener("click", ()=>{
    globalPlayer = 0;
}
);

/*2/Lorsqu'on clique sur ROllDice:
- un nombre aléatoire est généré par le dé
- le dé doit changer de face*/
let rollDice = document.getElementById("rollDice").addEventListener("click", ()=>{
    let dice = Math.floor(Math.random()* 6 ) + 1 ;
    roundScore += dice;
};

/*3/Lorsqu'on clique sur le boutton Hold :
- les rounds du player sont envoyés dans le global
- c'est au tour de l'autre joueur de lancer
*/
let hold = document.getElementById("hold").addEventListener("click", ()=>{
    globalPlayer += roundScore;
}
);

/*
4/Lorsque la valeur du dé vaut 1:
- le score round revient à zéro
- c'est au tour de l'autre joueur de lancer

5/Lorsqu'un joueur arrive à 100:
- la partie est gagnée
- on ne peut plus continuer à jouer
*/