import selectors from './selectors';

const data = [
  {
    "contractUntil": "2022-06-30",
    "dateOfBirth": "1993-05-13",
    "jerseyNumber": 9,
    "name": "Romelu Lukaku",
    "nationality": "Belgium",
    "position": "Centre-Forward",
    "age": 25
  },
  {
    "contractUntil": "2019-06-30",
    "dateOfBirth": "1990-11-07",
    "jerseyNumber": 1,
    "name": "David de Gea",
    "nationality": "Spain",
    "position": "Keeper",
    "age": 28
  },
  {
    "contractUntil": "2021-06-30",
    "dateOfBirth": "1987-02-22",
    "jerseyNumber": 20,
    "name": "Sergio Romero",
    "nationality": "Argentina",
    "position": "Keeper",
    "age": 32
  },
  {
    "contractUntil": "2020-06-30",
    "dateOfBirth": "1994-04-12",
    "jerseyNumber": 3,
    "name": "Eric Bailly",
    "nationality": "Cote d'Ivoire",
    "position": "Centre-Back",
    "age": 24
  },
  {
    "contractUntil": "2019-06-30",
    "dateOfBirth": "1989-11-22",
    "jerseyNumber": 12,
    "name": "Chris Smalling",
    "nationality": "England",
    "position": "Centre-Back",
    "age": 29
  },
  {
    "contractUntil": "2019-06-30",
    "dateOfBirth": "1990-03-20",
    "jerseyNumber": 5,
    "name": "Marcos Rojo",
    "nationality": "Argentina",
    "position": "Centre-Back",
    "age": 29
  },
  {
    "contractUntil": "2019-06-30",
    "dateOfBirth": "1992-02-21",
    "jerseyNumber": 4,
    "name": "Phil Jones",
    "nationality": "England",
    "position": "Centre-Back",
    "age": 27
  },
  {
    "contractUntil": "2019-06-30",
    "dateOfBirth": "1990-03-09",
    "jerseyNumber": 17,
    "name": "Daley Blind",
    "nationality": "Netherlands",
    "position": "Left-Back",
    "age": 29
  },
  {
    "contractUntil": "2018-06-30",
    "dateOfBirth": "1995-07-12",
    "jerseyNumber": 23,
    "name": "Luke Shaw",
    "nationality": "England",
    "position": "Left-Back",
    "age": 23
  },
  {
    "contractUntil": "2019-06-30",
    "dateOfBirth": "1989-12-02",
    "jerseyNumber": 36,
    "name": "Matteo Darmian",
    "nationality": "Italy",
    "position": "Right-Back",
    "age": 29
  },
  {
    "contractUntil": "2019-06-30",
    "dateOfBirth": "1985-08-04",
    "jerseyNumber": 25,
    "name": "Antonio Valencia",
    "nationality": "Ecuador",
    "position": "Right-Back",
    "age": 33
  },
  {
    "contractUntil": "2018-06-30",
    "dateOfBirth": "1981-07-28",
    "jerseyNumber": 16,
    "name": "Michael Carrick",
    "nationality": "England",
    "position": "Defensive Midfield",
    "age": 37
  },
  {
    "contractUntil": "2021-06-30",
    "dateOfBirth": "1993-03-15",
    "jerseyNumber": 6,
    "name": "Paul Pogba",
    "nationality": "France",
    "position": "Central Midfield",
    "age": 26
  },
  {
    "contractUntil": "2019-06-30",
    "dateOfBirth": "1989-08-14",
    "jerseyNumber": 21,
    "name": "Ander Herrera",
    "nationality": "Spain",
    "position": "Central Midfield",
    "age": 29
  },
  {
    "contractUntil": "2018-06-30",
    "dateOfBirth": "1987-11-22",
    "jerseyNumber": 27,
    "name": "Marouane Fellaini",
    "nationality": "Belgium",
    "position": "Central Midfield",
    "age": 31
  },
  {
    "contractUntil": "2018-06-30",
    "dateOfBirth": "1985-07-09",
    "jerseyNumber": 18,
    "name": "Ashley Young",
    "nationality": "England",
    "position": "Left Midfield",
    "age": 33
  },
  {
    "contractUntil": "2019-06-30",
    "dateOfBirth": "1988-04-28",
    "jerseyNumber": 8,
    "name": "Juan Mata",
    "nationality": "Spain",
    "position": "Attacking Midfield",
    "age": 30
  },
  {
    "contractUntil": "2021-06-30",
    "dateOfBirth": "1992-12-15",
    "jerseyNumber": 14,
    "name": "Jesse Lingard",
    "nationality": "England",
    "position": "Left Wing",
    "age": 26
  },
  {
    "contractUntil": "2019-06-30",
    "dateOfBirth": "1995-12-05",
    "jerseyNumber": 11,
    "name": "Anthony Martial",
    "nationality": "France",
    "position": "Left Wing",
    "age": 23
  },
  {
    "contractUntil": "2018-06-30",
    "dateOfBirth": "1981-10-03",
    "jerseyNumber": 10,
    "name": "Zlatan Ibrahimovic",
    "nationality": "Sweden",
    "position": "Centre-Forward",
    "age": 37
  },
  {
    "contractUntil": "2020-06-30",
    "dateOfBirth": "1997-10-31",
    "jerseyNumber": 19,
    "name": "Marcus Rashford",
    "nationality": "England",
    "position": "Centre-Forward",
    "age": 21
  },
  {
    "contractUntil": "2022-06-30",
    "dateOfBirth": "1988-12-19",
    "jerseyNumber": 7,
    "name": "Alexis Sánchez",
    "nationality": "Chile",
    "position": "Left Wing",
    "age": 30
  },
  {
    "contractUntil": "2020-06-30",
    "dateOfBirth": "1988-08-01",
    "jerseyNumber": 31,
    "name": "Nemanja Matic",
    "nationality": "Serbia",
    "position": "Defensive Midfield",
    "age": 30
  },
  {
    "contractUntil": "2021-06-30",
    "dateOfBirth": "1994-07-17",
    "jerseyNumber": 2,
    "name": "Victor Lindelöf",
    "nationality": "Sweden",
    "position": "Centre-Back",
    "age": 24
  },
  {
    "contractUntil": "2021-06-30",
    "dateOfBirth": "1996-06-28",
    "jerseyNumber": 40,
    "name": "Joel Pereira",
    "nationality": "Portugal",
    "position": "Keeper",
    "age": 22
  },
  {
    "contractUntil": "2020-06-30",
    "dateOfBirth": "1997-02-02",
    "jerseyNumber": 43,
    "name": "Cameron Borthwick-Jackson",
    "nationality": "England",
    "position": "Left-Back",
    "age": 22
  },
  {
    "contractUntil": "2021-06-30",
    "dateOfBirth": "1996-12-08",
    "jerseyNumber": 39,
    "name": "Scott McTominay",
    "nationality": "Scotland",
    "position": "Attacking Midfield",
    "age": 22
  }
];

describe('getPlayers', () => {
  test('Should filter by age', () => {
    const response = selectors.getPlayers({
      players: {
        data,
        filters: {
          age: 28,
        }
      }
    });

    expect(response).toEqual([data[1]]);
  });

  test('Should filter by name', () => {
    const response = selectors.getPlayers({
      players: {
        data,
        filters: {
          name: 'Romelu',
        }
      }
    });

    expect(response).toEqual([data[0]]);
  });

  test('Should filter by position', () => {
    const response = selectors.getPlayers({
      players: {
        data,
        filters: {
          position: 'Keeper',
        }
      }
    });

    expect(response).toEqual([data[1], data[2], data[24]]);
  });

  test('Should filter by position and age', () => {
    const response = selectors.getPlayers({
      players: {
        data,
        filters: {
          position: 'Centre-Back',
          age: 29
        }
      }
    });

    expect(response).toEqual([data[4], data[5]]);
  });

  test('Should filter by position, name and age', () => {
    const response = selectors.getPlayers({
      players: {
        data,
        filters: {
          position: 'Centre-Back',
          age: 29,
          name: 'Marcos'
        }
      }
    });

    expect(response).toEqual([data[5]]);
  });

  test('Should return an empty array when filters dont match any player', () => {
    const response = selectors.getPlayers({
      players: {
        data,
        filters: {
          position: 'Taxista'
        }
      }
    });

    expect(response).toEqual([]);
  });

  test('Should return the same array when is called with the same data and filters', () => {
    const response = selectors.getPlayers({
      players: {
        data,
        filters: {
          age: 28
        }
      }
    });

    const response2 = selectors.getPlayers({
      players: {
        data,
        filters: {
          age: 28
        }
      }
    });

    expect(response).toBe(response2);
  });
});