import React from 'react';
import { render } from 'react-testing-library';
import Row from './row';

function Table({ children }) {
  return (
    <table>
      <tbody>
        {children}
      </tbody>
    </table>
  );
}

const playerData = {
  "contractUntil": "2022-06-30",
  "dateOfBirth": "1993-05-13",
  "jerseyNumber": 9,
  "name": "Romelu Lukaku",
  "nationality": "Belgium",
  "position": "Centre-Forward",
  "age": 25
};

describe('List Row Component', () => {
  test('render player row', () => {
    const { container } = render(
      <Row player={playerData} />, 
      {
        wrapper: Table
      }
    );
  
    const rowNode = container.firstChild.firstChild.firstChild;
    expect(rowNode.tagName).toBe('TR');

    expect(rowNode.children.length).toBe(4);

    const nameNode = rowNode.children[0];
    expect(nameNode.tagName).toBe('TD');
    expect(nameNode.innerHTML).toBe('Romelu Lukaku');

    const positionNode = rowNode.children[1];
    expect(positionNode.tagName).toBe('TD');
    expect(positionNode.innerHTML).toBe('Centre-Forward');

    const nationalityNode = rowNode.children[2];
    expect(nationalityNode.tagName).toBe('TD');
    expect(nationalityNode.innerHTML).toBe('Belgium');

    const ageNode = rowNode.children[3];
    expect(ageNode.tagName).toBe('TD');
    expect(ageNode.innerHTML).toBe('25');
  });
});