// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
var fortune = Math.floor(Math.random()*10);
// YOUR CODE GOES HERE


// TODO: Create a fortune teller game using conditional statements and comparison operators.
function fortuneTellerGame(number) {
    var outcome = "yay"
    if ((number >= 0) && (number <= 3)){
        outcome = "You have a low fortune."
    } else if ((number > 3) && (number <= 7)){
        outcome = "You have an average fortune."
    } else if ((number > 7) && (number <= 10)){
        outcome = "You have a high fortune."
    } else {
        outcome = "Your fortune is uncertain."
    }
    return outcome;
}

// YOUR CODE GOES HERE
console.log(fortuneTellerGame(fortune))
