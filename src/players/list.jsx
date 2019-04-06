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
        {player.dateOfBirth}
      </td>
    </tr>
  )
}

export default function PlayersList({
  players
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Nationality</th>
          <th>Date of Birth</th>
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