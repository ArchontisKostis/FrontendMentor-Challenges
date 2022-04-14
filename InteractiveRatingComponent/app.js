const ratingCard =  document.getElementById("ratingCard");
const thankYou =  document.getElementById("thankYou");

const submitButton = document.getElementById("submit_button");
const choicesButtons = document.getElementsByClassName("choice");

var choiceValue = undefined;
var userChoiceElement = document.getElementById("userChoice");

submitButton.onclick = function (evt) {
    // Hide the rating elements
    ratingCard.style.visibility = "hidden";
    ratingCard.style.position = "absolute";
    // Show Thank you state
    userChoiceElement.innerHTML = `You selected ${choiceValue} out of 5`
    thankYou.style.visibility = "visible";
}

choicesButtons[0].onclick = function (evt) {
    this.focus();
    choiceValue = 1;
}

choicesButtons[1].onclick = function (evt) {
    this.focus();
    choiceValue = 2;
}

choicesButtons[2].onclick = function (evt) {
    this.focus();
    choiceValue = 3;
}

choicesButtons[3].onclick = function (evt) {
    this.focus();
    choiceValue = 4;
}

choicesButtons[4].onclick = function (evt) {
    this.focus();
    choiceValue = 5;
}