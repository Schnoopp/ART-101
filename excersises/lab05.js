let number = Math.floor(Math.random() * 10) + 1

$("#clickable").click(function () {
    console.log("clicked")
    number = Math.floor(Math.random() * 10) + 1
    $("#clickable").html("");
    $("#output").html("");
});

$("#good-button").click(function () {

    askNumber(number);
});


function askNumber(whatNumber) {
    let userNumber = prompt("Guess 1-10?");

    if (userNumber == whatNumber) {
        $("#output").html("<p>You got it!</p>");
        $("#clickable").append('<button id="restart">try again?</button>');
    }
    else {
        $("#output").html("Noooooope");
    }
}

