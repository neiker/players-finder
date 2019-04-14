import React from 'react';
import { render } from 'react-testing-library';
import { Players } from './';


describe('Renders Players', () => {
  
  test('Should show loading', () => {
    const { container } = render(
      <Players error={false} loading fetchPlayers={jest.fn()} />
    );

    expect(container.innerHTML).toBe('<span>Loading data...</span>');
  });

  test('Should show error', () => {
    const { container } = render(
      <Players error loading={false} fetchPlayers={jest.fn()} />
    );

    expect(container.innerHTML).toBe('<span class="error-text">There\'s was an error loading data.</span>');
  });

  test('Should render on valid players', () => {
    const { container } = render(
      <Players 
        error={false} 
        loading={false} 
        players={[]}
        fetchPlayers={jest.fn()} 
        setPlayersFilters={jest.fn()}
      />
    );

    const titleNode = container.firstChild;
    expect(titleNode.tagName).toBe('H1');
    expect(titleNode.innerHTML).toBe('Football Players Finder');
  });
});