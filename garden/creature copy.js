const creatureArray = [];
let sortingMethod = "name"

//functions
//functions to grab data from form
function getCreatureFromForm() {
    const freshCreature = {
        name: $("#cr-name").val(),
        color: $("#cr-color").val(),
        eyes: $("#cr-eyes").val()

    }
    return freshCreature;
}


async function getRandomName() {

    const response = await fetch("https://api.gofakeit.com/funcs/petname", { method: "GET", });

    const nameRandom = await response.text();

    console.log("Got name:", nameRandom);
    return nameRandom;
}


// creates creautre with random values
async function randomizeCreature() {
    const eyesRandom = Math.floor(Math.random() * 5) + 1;
    const nameRandom = await getRandomName();

    const randomCreature = {

        name: nameRandom,
        color: "randomcolor",
        eyes: eyesRandom,
    };

    return randomCreature;



}

// test if creature is valid
async function isCreatureValid(newCreature) {

    if ($("#cr-random").is(':checked')) {
        await randomizeCreature;
    }

    if (newCreature.name.replace(/^\s+|\s+$/gm, '') == "") {
        // do nothing
    }
    else {
      

    }

  console.log("true")
        return true;
}

// add creature to array, sort alphabetically
function addCreaturetoArray(newCreature) {
    creatureArray.push(newCreature);
    nameSort();

    console.log(creatureArray)
}


//display creatures in garden based on sorting method chosen
function displayCreatures() {
    //choose sorting method
    $("#creature-list").html("")
    if (sortingMethod == "name") {
        nameSort();
    }
    else if (sortingMethod == "eyes") {
        eyeNumSort();
    }

    // display each creature
    for (let i = 0; i < creatureArray.length; i++) {
        console.log(creatureArray[i].name)
        /*
                //creates eye structure
                let crEyesHtml = "";
                for (let i = 0; i < ; i++) {
                    crEyesHtml = crEyesHtml + "<div class='eye'>.</div>";
                }
        */
        //display creature: set box color based on input and display eyes. set name below
        $("#creature-list").append(`
            <div class="creature">
                <div class="creature-body" style="background-color: ${creatureArray[i].color}"> ${creatureArray[i].eyes}</div>
                <div class="creature-info">${creatureArray[i].name}</div>
                
            </div>
        `);
    }
}


//sorts creatures by name
function nameSort() {
    creatureArray.sort(function (a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

}

// sorts creatures by eye numbers
function eyeNumSort() {
    creatureArray.sort(function (a, b) {
        var eyesA = Number(a.eyes)
        var eyesB = Number(b.eyes)
        return eyesA - eyesB
    });
}


//create creature, check if it is valid and add to array
$("#cr-add").click(async function () {
    let newCreature;
    if ($("#cr-random").is(':checked')) {

        newCreature = await randomizeCreature();

    }
    else {
        newCreature = getCreatureFromForm();
    }

    console.log(newCreature);


    let validCreature = await isCreatureValid(newCreature)

    if (validCreature == false) {
        return;
    }
    else if (validCreature == true) {
        console.log("awaited")
        addCreaturetoArray(newCreature)
        displayCreatures()

    }


    //clear the text input box for next input
    $("#cr-name").val("");
    $("#cr-color").val("");
    $("#cr-eyes").val("");

});

// set sorting method to name and refresh creature display
$("#cr-nameSort").click(function () {
    sortingMethod = "name"
    console.log(sortingMethod)
    displayCreatures()

});

//set sorting method to number of eyes and refresh creature display
$("#cr-eyeSort").click(function () {
    sortingMethod = "eyes"
    console.log(sortingMethod)
    displayCreatures()



});
