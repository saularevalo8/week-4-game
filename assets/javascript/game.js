var mainRandomNum = getRandom(19, 120);
var totalScore = 0;
var wins = 0;
var losses = 0;
var crystals = [{
    name: "Blue Crystal",
    value: getRandom(1, 12)
}, {
    name: "Green Crystal",
    value: getRandom(1, 12)
}, {
    name: "Orange Crystal",
    value: getRandom(1, 12)
}, {
    name: "Purple Crystal",
    value: getRandom(1, 12)
}];

$("#random-number").append(mainRandomNum);


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function restartGame() {
    mainRandomNum = getRandom(19, 120);
    $("#random-number").text(mainRandomNum);
    for (var i = 0; i < crystals.length; i++) {
        crystals[i].value = getRandom(1, 12);

    }
    totalScore = 0;
    $("#total-score").text(totalScore);
}


function wonGame() {
    wins++;
    $("#wins").text(wins);
    restartGame();
    alert("Congratualations you won, the total has matched the number!");
}

function lostGame() {
    losses++;
    $("#losses").text(losses);
    restartGame();
    alert("Sorry you lost, the total does not match the number!");
}


$("#BlueCrystal").on("click", function() {

    var blValue = crystals[0].value;
    totalScore += blValue;
    $("#total-score").text(totalScore);
    if (mainRandomNum === totalScore) {
        wonGame();
    } else if (mainRandomNum < totalScore) {
        lostGame();
    }

});

$("#GreenCrystal").on("click", function() {

    var grValue = crystals[1].value;
    totalScore += grValue;
    $("#total-score").text(totalScore);
    if (mainRandomNum === totalScore) {
        wonGame();
    } else if (mainRandomNum < totalScore) {
        lostGame();
    }
});

$("#OrangeCrystal").on("click", function() {

    var orValue = crystals[2].value;
    totalScore += orValue;
    $("#total-score").text(totalScore);
    if (mainRandomNum === totalScore) {
        wonGame();
    } else if (mainRandomNum < totalScore) {
        lostGame();
    }
});

$("#PurpleCrystal").on("click", function() {

    var purValue = crystals[3].value;
    totalScore += purValue;
    $("#total-score").text(totalScore);
    if (mainRandomNum === totalScore) {
        wonGame();
    } else if (mainRandomNum < totalScore) {
        lostGame();
    }
});

$("#total-score").text(totalScore);
$("#wins").text(wins);
$("#losses").text(losses);
