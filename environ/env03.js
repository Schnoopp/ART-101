
let environmentTitle = "SillySwamp";

let environmentElements = ["frogs", "meowl", "bugs", "big frog", "mushrooms", "big tree"];

let frogArrayCount = -1
let meowlCount = 0

let frog = {
    name: "funny frog",
    type: "frog",
    mood: "happpy!",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

let meowl = {
    name: "mimi meowls",
    type: "meowl",
    mood: "contemplative",
    isMoving: false,
    favoriteElement: environmentElements[6]
}



//frog buttons
$("#frogName").click(function () {

$("#frogDialogue").html("<p>my name is " + frog.name + " and im a " + frog.type + " of course!</p>");
    console.log("clicked")
});

$("#frogFriend").click(function () {

$("#frogDialogue").html("<p>that's my friend! their name is " + meowl.name + "!</p>");
    console.log("clicked")
});


$("#frogLook").click(function () {

    frogArrayCount = frogArrayCount +1

    if (frogArrayCount >= environmentElements.length){
        frogArrayCount = 0
    }

$("#frogDialogue").html("<p>I am looking at "+ environmentElements[frogArrayCount] + "!</p>");
    console.log("clicked")
});


//meowl buttons

$("#meowlName").click(function () {

$("#meowlDialogue").html("<p>Hi! my name is " + meowl.name + " and im a " + meowl.type + "! I'm a new soul :3</p>");
    console.log("clicked")
});

$("#meowlFriend").click(function () {

$("#meowlDialogue").html("<p>that's my friend! their name is " + frog.name + "! I just met them today</p>");
    console.log("clicked")
});


$("#meowlHi").click(function () {

    meowlCount = meowlCount + 1

$("#meowlDialogue").html("<p>Hello! I have said hi " +meowlCount + " times! </p>");
    console.log("clicked")
});