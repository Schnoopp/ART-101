let count = 0;
let colorCount = 0;
let colors = ["Orchid", "Coral", "Pink", "Plum", "Orange", "Olive", "cadetblue", "darkseagreen"];
let bgcolors = colors.toReversed();

let moodlist = ["", "fresh and happy", "keep pushing!", "so tired!", "I'm dead"]
let mood = 0



$("#needy-button").click(function () {

    //Increase count and check if color is not greater than array
    count = count + 1

    if (colorCount >= colors.length - 1) {
        colorCount = 0
    }
    /*
        if (colors[colorCount] == "Orange") {
            $("#needy-button").after(" notPink ");
        }
        else if (colors[colorCount] == "Orchid") {
            $("#needy-button").after("  hey Orchid ");
        }
        else {
            $("#needy-button").after(" all other colors ");
        }
    */

    //mood
    if (count < 5) {
        mood = 1;
    }
    else if (count == 5) {
        mood = 2;
    }
    else if (count == 10) {
        mood = 3;
    }
    else if (count == 15) {
        mood = 4;
    }

    //orchid image
    if (colors[colorCount] == "Orchid") {
        $("body").append("<img width = 50 src = 'orchid.jpg'>");
    }


    //button change
    $("#needy-button").html("I've been clicked " + count + " times! " + colors[colorCount] + "..." + moodlist[mood])

    $("#needy-button").css("background-color", colors[colorCount])

    $("body").css("background-color", bgcolors[colorCount]);



    //color count increase
    colorCount = colorCount + 1





    //IGNORE
    /*
 
     $("#needy-button").html("I've been clicked " + count + " times! ")
 
     $("#needy-button").css("background-color", colors[count])
 
     if (count == colors.length-1) {
 
         count = 0
     }
 
     if (colors[count] == "Plum") {
         $("#needy-button").after(" notPink ");
     }
     else if (colors[count] == "Orchid") {
         $("#needy-button").after("  hey Orchid ");
     }
     else {
         $("#needy-button").after(" all other colors ");
     }
     count = count + 1
 */



});



let myCat = {
    name: "Matroskin",
    color: "Grey",
    ears: 2,
    hasKittens: false,
    purr: function () {
        console.log("purrrrr")
    },
    eat_sandwich: function () {

        console.log(name + " you're eating the sandiwch wrong")
    }

}





