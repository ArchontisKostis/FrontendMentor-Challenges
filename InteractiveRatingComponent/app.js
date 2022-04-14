const submitButton = document.getElementById("submit_button");

const choicesButtons = document.getElementsByClassName("choice");

submitButton.onclick = function (evt) {
    this.innerHTML = "CLICKED!";
}


for(var i=0; i<choicesButtons.length; i++){
    choicesButtons[i].onclick = function (evt) {
        this.focus();
    }
}