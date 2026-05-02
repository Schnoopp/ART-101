let count = 0;
let arrayPosition = -1;
let message = String


//ButtonCreature Clas
let buttonCreature = {
    name: "John",
    species: "Evil and intimidating horse",
    favoriteFood: "evil carrots",
    moods: ["mysterious", "evil", "intimidating", "hungry... feed me", "full from food"]
};


//Button clicking function

$("#needy-button").click(function () {
    //button counter and array counter
    count = count + 1;
    arrayPosition = arrayPosition + 1;

    //reset array counter to 0 when reaching end of mood array
    if (arrayPosition >= buttonCreature.moods.length) {
        arrayPosition = 0
    }

    //get current mood off of array
    let currentMood = buttonCreature.moods[arrayPosition];

    //set and display message

    message = "my name is " + buttonCreature.name + " and I am a(n) " + buttonCreature.species;
    $("#output").html("<p>" + message + "</p>");

    message = "My current mood is: " + currentMood;
    $("#output").append("<p>" + message + "</p>");



// check if creature is hungry, when full say yum
    if (buttonCreature.moods[arrayPosition] == "hungry... feed me") {
        message = "my favorite food is " + buttonCreature.favoriteFood + ". click the button to feed me";

        $("#output").append("<p>" + message + "</p>");
    }
    else if (buttonCreature.moods[arrayPosition - 1] == "hungry... feed me") {

        $("#yums").append("<p>" + "yum" + "</p>");
    }


});

