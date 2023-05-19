let div = document.querySelector(".container");
let responseNode = document.createElement("p");


//Function must take the guess as an argument
//Generate a random number to represent a coin flip
//Display a message about the flip

function pickHeads() {
    console.log("You picked Heads")
    result = Math.floor(Math.random() * 2) + 1;
    console.log("result is " + result)

    result == 1 ? responseNode.innerHTML = "You picked Heads. The Flip Resulted in Heads. Good Guess!" :  responseNode.innerHTML = "You picked Heads. The Flip Resulted in Tails. Better Luck Next Time!"
    div.appendChild(responseNode);
}



function pickTails() {
    console.log("You picked Tails")
    result = Math.floor(Math.random() * 2) + 1;
    console.log("result is " + result)
    result == 1 ? responseNode.innerHTML = "You picked Tails. The Flip Resulted in Heads. Better Luck Next Time!" :  responseNode.innerHTML = "You picked Tails. The Flip Resulted in Tails. Good Guess!"
    div.appendChild(responseNode);
}

