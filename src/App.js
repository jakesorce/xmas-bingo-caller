import React, { Component } from "react";
import presentImg from "./images/xmas-present.gif";
import "./App.css";

const LETTERS = ["B", "I", "N", "G", "O"];
const ITEMS = [
  "cloud",
  "wreath",
  "thermometer",
  "hot chocolate",
  "hat",
  "candy cane",
  "candles",
  "ornaments",
  "milk and cookies",
  "snowflake",
  "snow globe",
  "trees",
  "snowman",
  "bell",
  "stocking",
  "cheers",
  "christmas lights",
  "turkey",
  "present",
  "igloo",
  "star",
  "tram",
  "ornaments",
  "candy canes"
];

class App extends Component {
  state = { currentItem: null, gameItems: [] };

  setupGame = () => {
    let gameItems = [];

    LETTERS.forEach(letter => {
      ITEMS.forEach(item => {
        gameItems.push({ [letter]: item });
      });
    });

    this.setState({ gameItems, currentItem: null });
  };

  componentDidMount() {
    this.setupGame();
  }

  call = () => {
    const items = this.state.gameItems;

    const randomItemIndex = Math.floor(Math.random() * items.length); // Random Index position in the array
    const item = items.splice(randomItemIndex, 1); // Splice out a random element using the ri var
    this.setState({ currentItem: item[0], gameItems: items });
  };

  displayBingoCall = () => {
    const { currentItem } = this.state;
    if (!currentItem) return;
    const keys = Object.keys(currentItem);

    return (
      <div className="bingoCall">
        <h1>
          {keys[0]}-{currentItem[keys[0]]}
        </h1>
      </div>
    );
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className="App">
          <h1>Ellis Christmas Bingo!</h1>
          {this.displayBingoCall()}
          <img
            src={presentImg}
            className="presentButton"
            alt="present"
            onClick={this.call}
          />
          <button className="resetButton" onClick={this.setupGame}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
