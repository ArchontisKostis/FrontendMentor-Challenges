const newQuoteButton = document.getElementById("new-quote");
const adviceIdSpan = document.getElementById("advice-id");
const adviceQuote = document.getElementById("quote");

function getAdviceFromAPI(adviceIdElement, adviceTextElement) {
    fetch("https://api.adviceslip.com/advice")
    .then(res => {
        return res.json();
    })
    .then(loadedAdvice => {
        var adviceData = loadedAdvice.slip;
        adviceIdSpan.innerHTML = `ADVICE #${adviceData.id}`;
        adviceQuote.innerHTML = `"${adviceData.advice}"`;
    })
    .catch( err => {
        console.log(err);
    });
}

getAdviceFromAPI();
newQuoteButton.onclick = function (evt) {
    getAdviceFromAPI();
}


