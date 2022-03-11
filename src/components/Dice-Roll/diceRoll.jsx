import React from "react";
import "./diceRoll.css";

const DiceRoll = () => {
  const rollDice = () => {
    const dice = [...document.querySelectorAll(".die-list")];
    dice.forEach((die) => {
      toggleClasses(die);
      die.dataset.roll = getRandomNumber(1, 6);
    });
  };

  const toggleClasses = (die) => {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  };

  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div className="main">
      <main>
        <div className="dice">
          <ol className="die-list even-roll" data-roll="1" id="die-1">
            <li className="die-item" data-side="1">
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="2">
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="3">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="4">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="5">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="6">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
          </ol>
          <ol className="die-list odd-roll" data-roll="1" id="die-2">
            <li className="die-item" data-side="1">
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="2">
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="3">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="4">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="5">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="6">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
          </ol>
        </div>
        <button type="button" id="roll-button" onClick={rollDice}>
          Roll Dice
        </button>
      </main>
    </div>
  );
};

export default DiceRoll;
