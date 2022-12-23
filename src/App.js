import "./App.css";
import { useState } from "react";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [userChoice, setUserChoice] = useState();
  const [chosen, setChosen] = useState(0);
  const [played, setPlayed] = useState(0);
  let robotChoice;
  const [result, setResult] = useState();
  const [roboDisplay, setRoboDisplay] = useState();
  const [roboScore, setRoboScore] = useState(0);
  const [userScore, setUserScore] = useState(0);

  const incrementScore = (type) => {
    if (type === "Player") {
      setUserScore(userScore + 1);
    } else {
      setRoboScore(roboScore + 1);
    }
  };
  function playRobo() {
    let number = getRandomInt(3);
    if (number === 0) robotChoice = "Rock";
    if (number === 1) robotChoice = "Paper";
    if (number === 2) robotChoice = "Scissors";
    setRoboDisplay(robotChoice);
  }

  function playGame() {
    playRobo();

    if (robotChoice === userChoice) setResult("Draw");
    else if (robotChoice === "Rock" && userChoice === "Paper") {
      setResult("Win");
      incrementScore("Player");
    } else if (robotChoice === "Paper" && userChoice === "Scissors") {
      setResult("Win");
      incrementScore("Player");
    } else if (robotChoice === "Scissors" && userChoice === "Rock") {
      setResult("Win");
      incrementScore("Player");
    } else {
      setResult("Lose");
      incrementScore();
    }
  }

  return (
    <>
      <h1>Rock, Paper, Scissors!</h1>
      <h2>Choose an option!</h2>
      <p>
        User {userScore} - {roboScore} Computer
      </p>
      <table>
        <tbody>
          <tr>
            <td>
              <button
                onClick={() => {
                  setUserChoice("Rock");
                  setChosen(1);
                }}
              >
                Rock
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  setUserChoice("Paper");
                  setChosen(1);
                }}
              >
                Paper
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  setUserChoice("Scissors");
                  setChosen(1);
                }}
              >
                Scissors
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {chosen ? (
        <>
          <p> You've chosen {userChoice}!</p>
          <button
            onClick={() => {
              setChosen(0);
              setPlayed(1);
              playGame();
            }}
          >
            Play!
          </button>
        </>
      ) : (
        <></>
      )}
      {played ? (
        <p>
          {result}! You played {userChoice} and Computer played {roboDisplay}
        </p>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
