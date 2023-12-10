const hitButton = document.getElementById("strike");
const restartButton = document.getElementById("reset");
const $Team1Score = document.getElementById("score-team1");
const $Team1Wickets = document.getElementById("wickets-team1");
const $Team2Score = document.getElementById("score-team2");
const $Team2Wickets = document.getElementById("wickets-team2");

var team1Score = 0;
var team1Wickets = 0;
var team2Score = 0;
var team2Wickets = 0;
var team1BallsFaced = 0;
var team2BallsFaced = 0;
var currentTurn = 1;

const possibleOutcomes = [0, 1, 2, 3, 4, 6, "W"];

function endGame() {
  if (team1Score > team2Score) alert("INDIA wins..!!!");
  if (team2Score > team1Score) alert("PAK wins in their imagination");
  if (team2Score === team1Score) alert("It is another superover!");
}

function updateScores() {
  $Team1Score.textContent = team1Score;
  $Team1Wickets.textContent = team1Wickets;
  $Team2Score.textContent = team2Score;
  $Team2Wickets.textContent = team2Wickets;
}

restartButton.onclick = () => {
  window.location.reload();
};

hitButton.onclick = () => {

  const randomOutcome =
    possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];

  if (currentTurn === 2) {
    team2BallsFaced++;
    document.querySelector(
      `#team2-superover div:nth-child(${team2BallsFaced})`
    ).textContent = randomOutcome;
    if (randomOutcome === "W") {
      team2Wickets++;
    }
    else {
      team2Score += randomOutcome;
    }
      if (
      team2BallsFaced === 6 ||
      team2Wickets === 2 ||
      team2Score > team1Score
    ) {
      currentTurn = 3;
      endGame();
    }
  }

  if (currentTurn === 1) {
    team1BallsFaced++;
    document.querySelector(
      `#team1-superover div:nth-child(${team1BallsFaced})`
    ).textContent = randomOutcome;
    if (randomOutcome === "W") {
      team1Wickets++;
    } else {
      team1Score += randomOutcome;
    }
    if (team1BallsFaced === 6 || team1Wickets === 2) currentTurn = 2;
  }
  updateScores();
};
