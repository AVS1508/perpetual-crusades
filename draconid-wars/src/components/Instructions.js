import React, { Component } from "react";

class Instructions extends Component {
  onClose = (event) => {
    this.props.onClose(event);
  };
  render() {
    if (!this.props.displayInstruction) {
      return null;
    }
    return (
      <div class="instructions">
        <h2 style={{ textAlign: "center" }}>Game Instructions</h2>
        <div class="content">
          <ul>
            <li>Local 2-player game of Monopoly-except for D&D</li>
            <li>
              {" "}
              Humanoid Faction Player Character Choices: Mighty Knight, Ancient
              Wizard, Stealthy Rogue
            </li>
            <li>
              {" "}
              Draconem Faction Player Character Choices: Fiery Red Dragon,
              Baneful Blue Dragon, Noxious Green Dragon
            </li>
            <li>
              {" "}
              The Board generates based on player choices:
              <ul>
                <li>Starting Tile: Mythic Kingdom of Friendship</li>
                <li>
                  Tiles with Humanoid Terrain (MK: Lands of Fortitude, AW:
                  Places of Power, SR: Forests of Invisibility)
                </li>
                <li>
                  Tiles with Draconem Terrain (FR: Fiery Pits, BB: Ashy Embers,
                  NG: Poisonous Fumes)
                </li>
                <li>Tiles where battles occur: Fields of Destiny</li>
              </ul>
            </li>
            <li>
              Gameplay:
              <ul>
                <li>Player rolls the die.</li>
                <li>Player moves tiles forward the number on the die</li>
                <li>If the player lands on their own square: +2 Score</li>
                <li>
                  If the player lands on their opponent's square: -1 Score
                </li>
                <li>
                  If the player lands on a Fields of Destiny: 50/50 chance of
                  +1/-1 score
                </li>
                <li>If the player lands on starting square: +0 score</li>
              </ul>
            </li>
            <li>First player to 10 points wins!</li>
          </ul>
        </div>
        <div>
          <button class="inverted-button" onClick={this.onClose}>
            Close Instructions
          </button>
        </div>
      </div>
    );
  }
}

export default Instructions;
