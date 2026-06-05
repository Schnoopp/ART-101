let count = 0;
let colorCount = 0;
let orchidCount = 0;
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
    let orchid = '<img id="orchid" src="orchid.jpg">'

    if (colors[colorCount] == "Orchid") {
        $("#orchidGarden").append(orchid);
        orchidCount +=1
    }
    $("#orchidGardenText").html("There are currently " +orchidCount+ " orchids.")

    //button change
    $("#needy-button").html("I've been clicked " + count + " times! " + colors[colorCount] + "..." + moodlist[mood])

    $("#needy-button").css("background-color", colors[colorCount])

    $("body").css("background-color", bgcolors[colorCount]);


    //color count increase
    colorCount = colorCount + 1

});







