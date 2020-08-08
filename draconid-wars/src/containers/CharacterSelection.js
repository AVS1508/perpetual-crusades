/* eslint-disable require-jsdoc */
import React, { Component, Fragment } from "react";

class CharacterSelection extends Component {
  state = {
    characters: {
      Draconem: [
        "Baneful Blue Dragon",
        "Fiery Red Dragon",
        "Noxious Green Dragon",
      ],
      Humanoid: ["Ancient Wizard", "Mighty Knight", "Stealthy Rogue"],
    },
    currentPlayerNumber: 1,
    players: [],
    readyToStart: false,
  };

  setPlayer = (character) => {
    this.setState((prevState) => ({
      currentPlayerNumber: prevState.currentPlayerNumber + 1,
      players: [
        ...prevState.players,
        { number: prevState.currentPlayerNumber, character },
      ],
      readyToStart: prevState.currentPlayerNumber === 2 ? true : false,
    }));
  };

  getPlayerRace = (currentPlayerNumber) => {
    if (currentPlayerNumber % 2 === 1) {
      return "Humanoid";
    }
    return "Draconem";
  };

  render() {
    return (
      <div>
        <div className="players">
          {this.state.players.map((player) => (
            <div key={player.number}>
              <h3 style={{ textAlign: "center" }}>
                {this.getPlayerRace(player.number)} Hero
              </h3>
              <button className="character" style={{ textDecoration: "none" }}>
                <img
                  className="character-image"
                  src={`./characters/${player.character}.png`}
                  alt={player.character}
                />
                <div style={{ textAlign: "center", fontFamily: "Space Mono" }}>
                  {player.character}
                </div>
              </button>
            </div>
          ))}
        </div>
        {this.state.readyToStart ? (
          <Fragment>
            <button className="start-button">Start Game</button>
          </Fragment>
        ) : (
          <Fragment>
            <h1 style={{ textAlign: "center" }}>
              {this.getPlayerRace(this.state.currentPlayerNumber)} race, choose
              your hero:
            </h1>
            {this.state.characters[
              this.getPlayerRace(this.state.currentPlayerNumber)
            ].map((character) => (
              <button
                className="character"
                onClick={() => this.setPlayer(character)}
                style={{ textDecoration: "none" }}
                key={character}
              >
                <img
                  className="character-image"
                  src={`./characters/${character}.png`}
                  alt={character}
                />
                <div style={{ textAlign: "center" }}>{character}</div>
              </button>
            ))}
          </Fragment>
        )}
      </div>
    );
  }
}

export default CharacterSelection;
