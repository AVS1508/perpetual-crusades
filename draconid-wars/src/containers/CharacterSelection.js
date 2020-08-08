/* eslint-disable require-jsdoc */
import React, { Component } from "react";

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
    currentPlayerRace: "Humanoid",
    players: [],
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlignLast: "center" }}>
          {this.state.currentPlayerRace} race, choose your hero:
        </h1>
        {this.state.characters[this.state.currentPlayerRace].map(
          (character) => (
            <img
              className="character"
              src={`./characters/${character}.png`}
              alt={character}
            />
          )
        )}
      </div>
    );
  }
}

export default CharacterSelection;
