import React from 'react';
import { render } from 'react-testing-library';
import List from './';


describe('Renders List', () => {
  const playersData = [
    {
      name: 'Romelu Lukaku',
      position: 'Centre-Forward',
      age: 25,
      nationality: 'Belgium'
    },
    {
      name: 'David de Gea',
      position: 'Keeper',
      age: 25,
      nationality: 'Spain'
    },
  ];

  describe('Empty List', () => {
    let renderResult = render(<List players={[]} />);

    test('Should render a valid header', () => {
      expect(renderResult.container.innerHTML).toBe('<span class="error-text">No players found</span>');
    });
  });

  describe('Non Empty List', () => {
    let renderResult;
    
    beforeEach(() => {
      renderResult = render(<List players={playersData} />);
    });
  
    test('Should render a valid header', () => {
      const tHeadNode = renderResult.container.firstChild.firstChild;
      
      expect(tHeadNode.tagName).toBe('THEAD');
      expect(tHeadNode.innerHTML).toBe('<tr><th>Name</th><th>Position</th><th>Nationality</th><th>Age</th></tr>');
    });

    test('Should have a valid number of rows', () => {
      const tBodyNode = renderResult.container.querySelector('tbody');

      expect(tBodyNode.children.length).toBe(playersData.length);
    });
  });
  
});