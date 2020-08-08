import React, { Component } from "react";
import CharacterSelection from "./containers/CharacterSelection";
import "./App.css";

class App extends Component {
  state = {
    players: [],
    gameStarted: false,
  };

  startGame = (players) => {
    console.log(players);
  };

  render() {
    return (
      <div className="App">
        <CharacterSelection startGame={this.startGame}/>
      </div>
    );
  }
}

export default App;
