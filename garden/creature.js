const creatureArray = [];

$("#cr-add").click(function () {

    //get input from html textbox and assign to crName
    let crName = $("#cr-name").val();
    let crColor = $("#cr-color").val();
    let crEyes = $("#cr-eyes").val();

    // lets construct html for eyes
    let crEyesHtml = "";
    for (let i = 0; i < crEyes; i++) {
        crEyesHtml = crEyesHtml + "<div class='eye'>.</div>";
    }

    //check if input has text without white space, then sort critters
    if (crName.replace(/^\s+|\s+$/gm, '') == "") {

    }
    else {
        //function to sort the creatures and display them in the garden
        sortCreatures(crName, crColor, crEyesHtml);
    }

    //clear the text input box for next input
    $("#cr-name").val("");
    $("#cr-color").val("");
    $("#cr-eyes").val("");

});


function sortCreatures(name, color, eyes) {
    //create new creature object based on inputs
    let newCreature = { creatureName: name, creatureColor: color, creatureEyes: eyes }

    //add creature to the list
    creatureArray.push(newCreature);

    //sort the list aphabetically by creature name
    creatureArray.sort(function (a, b) {
        var textA = a.creatureName.toUpperCase();
        var textB = b.creatureName.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    //clear the existing display of the garden
    $("#creature-list").html("")

    //for each member in the creature array, append each name to the garden
    for (let i = 0; i < creatureArray.length; i++) {
        console.log(creatureArray[i].creatureName)

        //display creature: set box color based on input and display eyes. set name below
        $("#creature-list").append(`
            <div class="creature">
                <div class="creature-body" style="background-color: ${creatureArray[i].creatureColor}"> ${creatureArray[i].creatureEyes}</div>
                <div class="creature-info">${creatureArray[i].creatureName}</div>
                
            </div>
        `);

    }



}