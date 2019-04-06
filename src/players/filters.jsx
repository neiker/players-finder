import React from 'react';
import { 
  Form, 
  Text,
  Select, 
  Option,
 } from 'informed';

const positions = [
  'Attacking Midfield',
  'Central Midfield',
  'Centre-Back',
  'Centre-Forward',
  'Defensive Midfield',
  'Keeper',
  'Left Midfield',
  'Left Wing',
  'Left-Back',
  'Right-Back',
];

function validateAge(value) {
  if (value) {
    const parsedValue = parseInt(value, 10);

    if (isNaN(parsedValue)) {
      return 'Invalid age';
    }

    if (parsedValue > 40 || parsedValue < 18) {
      return 'Age must be between 18 and 40'
    }
  }

  return undefined;
}

function validateName(value) {
  // A Inés Ibáñez, Agustín Nuñez y muchas otras personas no le gusta esto. 
  return /^[a-zA-Z]*$/.test(value) ? undefined : 'Invalid name';
}

function PlayersFilters({
  onSubmit,
}) {
  return (
    <Form onSubmit={onSubmit}>
      {({ formState }) => (
        <>
          <div>
            <Text 
              field="name" 
              placeholder="Player Name" 
              validate={validateName}
              validateOnChange={formState.invalid}
            />
            {formState.errors.name && (
              <span className="error-text">{formState.errors.name}</span>
            )}

          </div>

          <div>
            <Select field="position">
              <Option value="">
                All Positions
              </Option>

              {positions.map(position => (
                <Option value={position} key={position}>{position}</Option>
              ))}
            </Select>
          </div>

          <div>
            <Text 
              field="age" 
              validate={validateAge} 
              validateOnChange={formState.invalid}
              placeholder="Player Age" 
            />

            {formState.errors.age && (
              <span className="error-text">{formState.errors.age}</span>
            )}
          </div>

          <button type="submit" disabled={formState.invalid}>Search</button>
        </>
      )}
    </Form>
  );
}

export default PlayersFilters;