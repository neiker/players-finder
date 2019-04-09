import React from 'react';
import PropTypes from 'prop-types';

import PlayerRow from './row';

export default function PlayersList({
  players
}) {
  if (!players.length) {
    return (
      <span className="error-text">No players found</span>
    );
  }

  return (
    <table className="players-list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Nationality</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <PlayerRow 
            key={index}
            player={player} 
          />
        ))}
      </tbody>
    </table>
  )
}

PlayersList.propTypers = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
}