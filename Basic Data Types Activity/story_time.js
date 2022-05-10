// TODO: Create 4-String variables to introduce develop your story.
let charaName = "Nathaniel"
let feeling = "hungry"
let pet = "buffalo"
let skill = "surfer"

// TODO: Create 3-Integer variables to set the time period of your story or discuss other number elements.
let time = 5.00;
let noOfHairpins = 10;
let foodChoiceNo = Math.floor(Math.random() * 5);


// TODO: Create 1-Array variable to show a collection of items your character might have.
let foodChoices = ['curry', 'roast chicken', 'noodle soup', 'fried rice', 'mutton']


// TODO: Create 1-Boolean variable to demonstrate a true or false scenario.
let isStomachFull = false;


// TODO: Print your story to the console.
console.log(foodChoiceNo)
console.log("You wake up. The time is "+time+" am.");
console.log("Your name is "+charaName+"\n");
console.log("You are preparing for something big. Something grand. Something ginormous.")
console.log("This momentful day means you need to put on your "+noOfHairpins+" lucky hairpins.")
console.log("However, before you can set foot on your amazing journey, you're "+feeling+".\n")
if (isStomachFull == false){
    console.log("You head to the kitchen to your long table laid with food set up by your servants and weigh your options. \n")
    console.log(foodChoices);
    console.log("You choose the "+foodChoices[foodChoiceNo]+".\n");
    isStomachFull = true;
}
console.log("You are now all set to go. You proceed to fetch your "+pet+" to begin his training to be the world's best "+skill+".")