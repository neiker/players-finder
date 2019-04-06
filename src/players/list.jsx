import React from 'react';

function PlayerRow({
  player,
}) {
  return (
    <tr>
      <td>
        {player.name}
      </td>
      <td>
        {player.position}
      </td>
      <td>
        {player.nationality}
      </td>
      <td>
        {player.age}
      </td>
    </tr>
  )
}

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