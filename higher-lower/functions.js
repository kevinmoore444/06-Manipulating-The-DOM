let randomNumber = Math.floor(Math.random() * 20) + 1
console.log(randomNumber)


function do_guess(){
    let guess = Number(document.getElementById("guess").value)

    let message = document.getElementById("message");
    console.log(guess)

    if(guess == randomNumber){
        message.innerHTML = "You Got It!";
    }
    else if(guess > randomNumber){
        message.innerHTML = "Try a Lower Number"
    }
    else{
        message.innerHTML = "Try a Higher Number"
    }

}


