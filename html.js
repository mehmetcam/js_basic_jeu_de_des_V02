let player1;
let player2;

let p1Score;
let p2Score;

p1Score = 0;
p2Score = 0;

const x = document.getElementById("dice");


player1 = Math.ceil(Math.random() * 7);
player2 = Math.ceil(Math.random() * 7);

console.log(`${player1}`);
console.log(`${player2}`);

// window.alert("Welcome");

function myfunction(player1, player2) {

    
    player1 = Math.ceil(Math.random() * 6);
    document.getElementById("player1").innerHTML = `<img src='${player1}.jpg' />`;
    player2 = Math.ceil(Math.random() * 6);
    document.getElementById("player2").innerHTML = `<img src='${player2}.jpg' />`;
    if (player1 > player2) {
        document.getElementById("resultat").innerHTML = "Player 1 WON !"
        p1Score = p1Score + 1;
        document.getElementById("p1Score").innerHTML = `P1 Score : ${p1Score}`
    }

    if (player1 < player2) {
        document.getElementById("resultat").innerHTML = "Player 2 WON !"
        p2Score = p2Score + 1;
        document.getElementById("p2Score").innerHTML = `P2 Score : ${p2Score}`
    }

    if (player1 == player2) {
        document.getElementById("resultat").innerHTML = "Egalité !"
    }
}




function playSound(){
    document.getElementById("dice").play();

}

