import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Filters, { validateAge } from './';

describe('Renders players filters', () => {
  let submitHandler;
  let getByText; 
  let container;
  let submitButtonNode;
  let formNode;
  
  beforeEach(() => {
    submitHandler = jest.fn();

    ({
      getByText, 
      container
    } = render(
      <Filters onSubmit={submitHandler} />
    ));

    submitButtonNode = getByText('Search');
    formNode = container.firstChild;
  });


  it ('Should have a disabled submit button when rendered', () => {
    expect(submitButtonNode.disabled).toBe(true);
  });
  

  test('Should change name and enable submit button', () => {
    const nameInputNode = formNode.firstChild.firstChild;

    fireEvent.change(nameInputNode, {target: { value : 'Pepito'}});
  
    expect(nameInputNode.value).toBe('Pepito');

    expect(submitButtonNode.disabled).toBe(false);
  });
  
  test('Should change position and enable submit button', () => {
    const positionSelectNode = formNode.children[1].firstChild;

    fireEvent.change(positionSelectNode, {target: { value : 'Keeper'}});

    expect(positionSelectNode.value).toBe('Keeper');
  
    expect(submitButtonNode.disabled).toBe(false);
  });

  test('Should change age and enable submit button', () => {
    const ageNode = formNode.children[2].firstChild;

    fireEvent.change(ageNode, {target: { value : '25'}});

    expect(ageNode.value).toBe('25');

    expect(submitButtonNode.disabled).toBe(false);
  });

  test('Should submit form with all fields changed', () => {
    const positionSelectNode = formNode.children[1].firstChild;
    const nameInputNode = formNode.firstChild.firstChild;
    const ageNode = formNode.children[2].firstChild;

    fireEvent.click(submitButtonNode);
    fireEvent.click(submitButtonNode);
    fireEvent.click(submitButtonNode);

    expect(submitHandler.mock.calls.length).toBe(0);

    fireEvent.change(positionSelectNode, {target: { value : 'Keeper'}});
    fireEvent.change(nameInputNode, {target: { value : 'Pepito'}});
    fireEvent.change(ageNode, {target: { value : '25'}});

    fireEvent.click(submitButtonNode);

    expect(submitHandler.mock.calls.length).toBe(1);

    const args = submitHandler.mock.calls[0];

    expect(args[0]).toEqual({ age: 25, position: 'Keeper', name: 'Pepito' });
  });

  test('Should display error on invalid name and remove it once valid values was introduced', () => {
    const nameNode = formNode.firstChild.firstChild;

    fireEvent.change(nameNode, {target: { value : 'José Nuñez'}});

    expect(submitButtonNode.disabled).toBe(false);

    fireEvent.click(submitButtonNode);

    expect(submitButtonNode.disabled).toBe(true);
    expect(formNode.firstChild.children.length).toBe(2);
    expect(formNode.firstChild.children[1].innerHTML).toBe('Invalid name');

    expect(submitButtonNode.disabled).toBe(true);

    fireEvent.change(nameNode, {target: { value : 'Jose Nunez'}});

    expect(submitButtonNode.disabled).toBe(false);

    expect(formNode.firstChild.children.length).toBe(1);
  });

  test('Should display error on invalid age and remove it once valid values was introduced', () => {
    const ageNodeWrapper = formNode.children[2];
    const ageNode = ageNodeWrapper.firstChild;

    fireEvent.change(ageNode, {target: { value : '17'}});
    expect(ageNode.value).toBe('17');

    expect(submitButtonNode.disabled).toBe(false);

    fireEvent.click(submitButtonNode);

    expect(submitButtonNode.disabled).toBe(true);

    expect(ageNodeWrapper.children.length).toBe(2);
    expect(ageNodeWrapper.children[1].innerHTML).toBe('Age must be between 18 and 40');

    fireEvent.change(ageNode, {target: { value : '41'}});
    expect(ageNode.value).toBe('41');

    expect(submitButtonNode.disabled).toBe(true);

    expect(ageNodeWrapper.children[1].innerHTML).toBe('Age must be between 18 and 40');

    fireEvent.change(ageNode, {target: { value : '21'}});
    expect(ageNode.value).toBe('21');
    
    expect(formNode.firstChild.children.length).toBe(1);

    expect(submitButtonNode.disabled).toBe(false);
  });
});

describe('validateAge', () => {
  // This should be tested here because js-dom don't
  // let to invalid values sets to a input[type=number]
  // but some browsers does

  test('validateAge should get an error on invalid age', () => {
    const error = validateAge('a');

    expect(error).toBe('Invalid age');
  });
});
