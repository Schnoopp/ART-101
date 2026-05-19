
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

    frogArrayCount = frogArrayCount + 1

    if (frogArrayCount >= environmentElements.length) {
        frogArrayCount = 0
    }

    $("#frogDialogue").html("<p>I am looking at " + environmentElements[frogArrayCount] + "!</p>");
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

    $("#meowlDialogue").html("<p>Hello! I have said hi " + meowlCount + " times! </p>");
    console.log("clicked")
});




$("#bugs").click(function () {
    console.log("clicked")
    askBugs();
});


function askBugs() {
    $(".topzone").html("")
    let userBug = prompt("what bugs are there? type 'dragonfly', 'butterfly', or 'none'");

    if (userBug == 'dragonfly') {
        let bugNum = prompt("how many bugs are there? type in an integer")

        bugimg = '<img id="bug" src="environImages/df5yl06-9ab1ae64-3abc-45cb-beff-488325a6f783.gif">'

        if (bugNum == 1) {
            $("#meowlDialogue").html("<p>Ahh! I'm scared of dragonflies!!</p>");
            $("#frogDialogue").html("<p>Look! A Dragonfly!!</p>");
        }
        else if (bugNum > 1) {

            $("#meowlDialogue").html("<p>Ahh! I'm scared of dragonflies!!</p>");
            $("#frogDialogue").html("<p>Look! Dragonflies!!</p>");
        }
        else if (bugNum <= 0) {
            $("#meowlDialogue").html("");
            $("#frogDialogue").html("");
        }


        for (let i = 0; i < bugNum; i++) { $(".topzone").append(bugimg) }





    }
    else if (userBug == 'butterfly') {
        let bugNum = prompt("how many bugs are there? type in an integer")


        bugimg = '<img id="bug" src="environImages/tumblr_mnmxj7MS4s1rni86yo1_500.gif">'
        console.log(userBug)
        console.log(bugimg)
        console.log(bugNum)


        if (bugNum == 1) {
            $("#meowlDialogue").html("<p>Butterflies are pretty, but still a little scary</p>");
            $("#frogDialogue").html("<p>Look! A butterfly!!!</p>");
        }
        else if (bugNum > 1) {

            $("#meowlDialogue").html("<p>Butterflies are pretty, but still a little scary</p>");
            $("#frogDialogue").html("<p>Look! Butterflies!!</p>");
        }
        else if (bugNum <= 0) {
            $("#meowlDialogue").html("");
            $("#frogDialogue").html("");
        }


        for (let i = 0; i < bugNum; i++) { $(".topzone").append(bugimg) }

    }
    else if (userBug == 'none') {

        bugimg = ''
        console.log(userBug)
        console.log(bugimg)



        $("#meowlDialogue").html("<p>Where'd they go?</p>");
        $("#frogDialogue").html("<p>Hmm i don't see any bugs</p>");


        $(".topzone").html("")
    }
    else {
        $(".topzone").html("")
    }
}


let meowlpoked = false;
let meowlrotation = 0


$("#meowl").hover(

    function () {
        $("#thought").stop(true, true).slideDown(300);
        $("#thought").html("please dont poke me....");

    },
    function () {
        if (meowlpoked == true) {
            $("#thought").html("that's not very nice!");
            $(this).toggleClass("transformed");
            meowlpoked = false

        }
        else{
            $("#thought").stop(true, true).slideUp(300);
        }
        
        
    }
);


$("#meowl").click(function () {
    if (meowlpoked == false) {

        meowlrotation = Math.floor(Math.random() * 11);
        $(".transformed").css("rotate", meowlrotation)

        $(this).toggleClass("transformed");
        $("#thought").html("owch!! :(")
        meowlpoked = true
    }
    elseif(meowlpoked == true)(

    )

});


$("#creature").click(function () {
    $(this).toggleClass("transformed");
    $("#status").text("The creature changed shape.");
});