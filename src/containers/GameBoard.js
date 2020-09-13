import React, { Component } from "react";

class GameBoard extends Component {
  state = {
    // Side length of Board as 11 units ensures a total of 40 traversable tiles.
    boardSideSize: 8,
    // Array to hold tile objects
    tiles: [],
  };

  componentDidMount() {
    // Assign the tiles generated to array
    const tiles = this.tileGenerator();
    // Update the state with newly assigned tiles
    this.setState({
      tiles,
    });
  }

  tileGenerator() {
    // Destructuring construct to obtain Humanoid and Dragon characters from props
    const {
      players: [Humanoid, Dragon],
    } = this.props;
    // Initializing board tiles with starting tile
    const tiles = [
      {
        row_index: 1,
        col_index: 1,
        type: "Start",
      },
    ];
    // Destructuring construct to obtain length of board from state
    const { boardSideSize } = this.state;
    // Array-based group assignment for index, row_index and col_index from tile right after the starting one
    let [index, row_index, col_index] = [1, 1, 2];
    // Calculating total number of corner and edge tiles on board using 4*(side-1) rule
    const boardTiles = 4 * (boardSideSize - 1);
    // Loop for traversing through the tiles and adding them to tiles array
    while (tiles.length < boardTiles) {
      // Generated tile from indices
      const tile = {
        row_index,
        col_index,
      };

      // Assignment of the type of tile based on equal distribution of all three kinds of tiles among 39 tiles (13 of each kind)
      tile.type =
        index % 3 === 0
          ? "Fields of Destiny"
          : index % 3 === 1
          ? Humanoid.character
          : Dragon.character;

      // Finally push the new tile to array of tiles
      tiles.push(tile);
      // Increment the index for while loop
      ++index;
      // Travel path would be boardSideSize - 1 as it would reach corner and turn
      const traversalPathLength = boardSideSize - 1;
      // Based on index, change the row_index and col_index
      if (index <= traversalPathLength) {
        ++col_index;
      } else if (index <= 2 * traversalPathLength) {
        ++row_index;
      } else if (index <= 3 * traversalPathLength) {
        --col_index;
      } else {
        --row_index;
      }
    }

    // Return the array of tiles after complete generation
    return tiles;
  }

  diceThrow = () => {
    const choice = Math.floor(6 * Math.random()) + 1;
    const diceDisplay = choice;
    this.setState({
      diceDisplay,
    });
    this.props.movePlayer(choice, this.state.tiles);
  };

  render() {
    const { boardSideSize } = this.state;
    let positions = [];
    if (this.state.tiles.length > 0) {
      positions = this.props.players.map(
        (player) => this.state.tiles[player.position % this.state.tiles.length]
      );
    }
    return (
      <div
        className="game-board"
        style={{
          gridTemplateRows: `repeat(${boardSideSize}, 1fr)`,
          gridTemplateColumns: `repeat(${boardSideSize}, 1fr)`,
        }}
      >
        {this.state.tiles.map((tile, index) => (
          <div
            className="game-tile"
            style={{
              gridRow: tile.row_index,
              gridColumn: tile.col_index,
            }}
            key={index}
          >
            {tile.type !== "Start" ? (
              <img alt={tile.type} src={`./tiles/${tile.type}.jpg`} />
            ) : (
              <img
                alt="Start"
                src={"./tiles/Mythic Kingdom of Friendship.jpg"}
              />
            )}
          </div>
        ))}
        {positions.map((position, index) => {
          const player = this.props.players[index];
          return (
            <div
              className="player-character"
              key={player.number}
              style={{
                gridRow: position.row_index,
                gridColumn: position.col_index,
                transition: `all 1s`,
              }}
            >
              <img
                className="character-image"
                alt={player.number}
                src={`./characters/${player.character}.png`}
              />
            </div>
          );
        })}
        <div className="board-center">
          {this.props.tile ? (
            <div
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3>
                {this.props.tile.player.character}:{this.props.tile.points}{" "}
                score
              </h3>
              <br />
              <h5>
                {this.props.tile.player.character} reached
                <br />
                {this.props.tile.type}'s stronghold!
              </h5>
              <br />
            </div>
          ) : (
            ""
          )}
          {this.props.tile && this.props.tile.player.score >= 20 ? (
            <div
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                className="character-image"
                src={`./characters/${this.props.tile.player.character}.png`}
                alt={this.props.tile.player.character}
              />
              <h3>{this.props.tile.player.character} won!</h3>
            </div>
          ) : (
            <>
              <h5> {this.props.currentPlayer.character}, roll the dice! 🎲</h5>
              {this.state.diceDisplay ? (
                <img
                  className="dice-thrown"
                  src={`./dice/${this.state.diceDisplay}.png`}
                  alt={this.state.diceDisplay}
                />
              ) : (
                ""
              )}
              <button onClick={this.diceThrow} className="button">
                Dice Roll!
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default GameBoard;
