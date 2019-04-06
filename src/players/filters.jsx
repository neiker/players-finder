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

const validateAge = value => {
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
};

function PlayersFilters({
  onSubmit,
}) {
  return (
    <Form onSubmit={onSubmit}>
      {({ formState }) => (
        <>
          <div>
            <Text field="name" placeholder="Player Name" />
          </div>

          <div>
          <Select field="position">
            <Option value="" disabled>
              Position
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
            validateOnChange={!!formState.errors.age}
            placeholder="Player Age" 
          />

          {formState.errors.age && (
            <span className="error-text">{formState.errors.age}</span>
          )}

</div>
          <button type="submit" disabled={formState.invalid}>Search</button>

          {/* <pre>{JSON.stringify(formState, null, '  ')}</pre> */}
        </>
      )}
    </Form>
  );
}

export default PlayersFilters;