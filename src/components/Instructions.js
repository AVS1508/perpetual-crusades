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
        <br />
        <br />
        <div class="content">
          <ul>
            <li>The first player chooses a Humanoid character.</li>
            <li>The second player chooses a Dragon character.</li>
            <li>
              The Board appears, and Humanoid character begins by rolling a die!
            </li>
            <li>
              The player moves ahead the same number of tiles as the number on
              the die.
              <ul>
                <li>
                  If the player lands on their own tile, then their score is
                  incremented by 2.
                </li>
                <li>
                  If the player lands on their opponent's tile, then their score
                  is decremented by 1.
                </li>
                <li>
                  If the player lands on Fields of Destiny, they have an equal
                  chance of winning a point or forfeiting a point.
                </li>
                <li>
                  If the player lands on Mythic Kingdom of Friendship, the
                  player's score is not affected.
                </li>
              </ul>
            </li>
            <li>
              There is no clear winner in this game (just like there is no
              victor in war), and you can keep playing till one of the players
              reach an arbitrary limit on the score, decided before embarking on
              this quest. A game of 15 points is preferable for short
              playthroughs.
            </li>
          </ul>
        </div>
        <br />
        <br />
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
