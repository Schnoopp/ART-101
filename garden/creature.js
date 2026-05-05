const creatureArray = [];

$("#cr-add").click(function () {

    let crName = $("#cr-name").val();


    if (crName.replace(/^\s+|\s+$/gm, '') == "") {

    }
    else {

        sortCreatures(crName);
    }


    $("#cr-name").val("");
});

function sortCreatures(name) {
    creatureArray.push(name)
    for i in creatureArray{
        
    }

    $("#creature-list").append("<div>" + creatureArray + "</div>")
}