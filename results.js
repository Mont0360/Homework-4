var highScoreList = document.querySelector("#highScores");
var backButton = document.querySelector("#go-back");
var clearScores = document.querySelector("#clear-highscores");

clearScores.addEventListener("click", function () {
    clearAll();
    window.location.href = "results.html";
})
backButton.addEventListener("click", function () {
    window.location.href = "index.html";
})