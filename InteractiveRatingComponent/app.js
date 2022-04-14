const submitButton = document.getElementById("submit_button");
const choicesButtons = document.getElementsByClassName("choice");
var choiceValue = undefined;

submitButton.onclick = function (evt) {
    console.log(`CLICKED!\nValue: ${choiceValue}`);
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