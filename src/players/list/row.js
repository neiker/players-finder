import React from 'react';
import PropTypes from 'prop-types';

export default function PlayerRow({
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
  );
}

PlayerRow.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired
};