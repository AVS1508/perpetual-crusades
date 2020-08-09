import React, { Component } from "react";
import PlayersDisplay from "./components/PlayersDisplay";
import CharacterSelection from "./containers/CharacterSelection";
import GameBoard from "./containers/GameBoard";
import "./App.css";

class App extends Component {
  state = {
    players: [],
    gameStarted: false,
    currentPlayer: null,
    tile: null,
    gameOver: false,
  };

  startGame = (players) => {
    this.setState({
      players: players.map((player) => ({
        ...player,
        position: 0,
        score: 0,
      })),
      gameStarted: true,
      currentPlayer: players[0],
    });
  };

  movePlayer = (number, tiles) => {
    this.setState((prevState) => {
      let currentPlayer = prevState.players.find(
        (player) => player.number === prevState.currentPlayer.number
      );

      const position = currentPlayer.position + number;
      const landingTile = tiles[position % tiles.length];
      const increaseScore = (function () {
        if (landingTile.type === currentPlayer.character) {
          return 2;
        } else if (landingTile.type === "Start") {
          return 0;
        } else if (landingTile.type !== "Fields of Destiny") {
          return -1;
        } else {
          return Math.floor(2 * Math.random()) === 0 ? 1 : -1;
        }
      })();

      currentPlayer = {
        ...currentPlayer,
        position: currentPlayer.position + number,
        score: Math.max(0, currentPlayer.score + increaseScore),
      };

      const tile = {
        player: currentPlayer,
        type: landingTile.type,
        points: (increaseScore >= 0 ? "+" : "") + increaseScore,
      };

      return {
        tile,
        players: prevState.players.map((player) =>
          player.number === prevState.currentPlayer.number
            ? currentPlayer
            : player
        ),
        currentPlayer:
          prevState.currentPlayer.number === prevState.players[0].number
            ? prevState.players[1]
            : prevState.players[0],
      };
    });
  };
  render() {
    return (
      <div className="App">
        <PlayersDisplay
          players={this.state.players}
          getPlayerRace={(currentPlayerNumber) =>
            currentPlayerNumber === 1 ? "Humanoid" : "Draconem"
          }
          onIntroScreen={false}
        />
        {this.state.gameStarted ? (
          <>
            <GameBoard
              players={this.state.players}
              currentPlayer={this.state.currentPlayer}
              tile={this.state.tile}
              gameOver={this.state.gameOver}
              movePlayer={this.movePlayer}
            />
          </>
        ) : (
          <CharacterSelection startGame={this.startGame} />
        )}
      </div>
    );
  }
}

export default App;
