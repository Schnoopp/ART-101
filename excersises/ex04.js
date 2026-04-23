let count = 0;
let colorCount = -1;
let colors = ["Orchid", "Coral", "Pink", "Plum", "Orange", "Olive", "cadetblue"];

let myCat={
    name: "Matroskin",
    color: "Grey",
    ears: 2,
    hasKittens: true,
    purr: function(){

        console.log("purrrrr")
    },
    eat_sandwich: function(){

        console.log(name +" you're eating the sandiwch wrong")
    }

}



$("#needy-button").click(function () {

    count = count + 1
    colorCount = colorCount + 1

    if (colorCount >= colors.length) {

        colorCount = 0
    }

    $("#needy-button").html("I've been clicked " + count + " times! " + colors[colorCount])

    $("#needy-button").css("background-color", colors[colorCount])

    



})


