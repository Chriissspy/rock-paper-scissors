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

  function playRobo() {
    let number = getRandomInt(3);
    if (number === 0) robotChoice = "Rock";
    if (number === 1) robotChoice = "Paper";
    if (number === 2) robotChoice = "Scissors";
    setRoboDisplay(robotChoice);
  }

  function playGame() {
    playRobo();
    setResult("Lose");
    if (robotChoice === userChoice) setResult("Draw");
    if (robotChoice === "Rock" && userChoice === "Paper") setResult("Win");
    if (robotChoice === "Paper" && userChoice === "Scissors") setResult("Win");
    if (robotChoice === "Scissors" && userChoice === "Rock") setResult("Win");
  }

  return (
    <>
      <h1>Rock, Paper, Scissors!</h1>
      <h2>Choose an option!</h2>
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
