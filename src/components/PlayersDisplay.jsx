import React from "react";

const PlayersDisplay = ({ players, getPlayerRace, onIntroScreen }) => (
  <div className="players">
    {players.map((player) => (
      <div key={player.number}>
        <h3 style={{ textAlign: "center" }}>
          {getPlayerRace(player.number)} Hero
        </h3>
        {onIntroScreen === true ? (
          <button
            className="character character-display"
            style={{ textDecoration: "none" }}
          >
            <img
              className="character-image"
              src={`./characters/${player.character}.png`}
              alt={player.character}
            />
            <div style={{ textAlign: "center", fontFamily: "Space Mono" }}>
              {player.character}
            </div>
            <p className="player-score">{player.score}</p>
          </button>
        ) : (
          <button
            className="character character-intro"
            style={{ textDecoration: "none" }}
          >
            <img
              className="character-image"
              src={`./characters/${player.character}.png`}
              alt={player.character}
            />
            <div style={{ textAlign: "center", fontFamily: "Space Mono" }}>
              {player.character}
            </div>
            <p className="player-score">{player.score}</p>
          </button>
        )}
      </div>
    ))}
  </div>
);

export default PlayersDisplay;
