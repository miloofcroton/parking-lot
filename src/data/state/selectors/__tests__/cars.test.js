import {
  getCar,
  getCars,
  searchCars
} from '../cars';

describe('cars selector', () => {
  const state = {
    cars: {
      searchTerm: 'asdf',
      list: {
        abcd1234: { plate: 'abc123', make: 'Toyota', model: 'Tacoma', lotUses: 5, inLot: true },
        decf6789: { plate: 'abc123', make: 'Toyota', model: 'Tacoma', lotUses: 3, inLot: false }
      }
    }
  };

  test('gets car from state', () => {
    const car = getCar(state, 'abcd1234');
    const carResult = { id: 'abcd1234', plate: 'abc123', make: 'Toyota', model: 'Tacoma', lotUses: 5, inLot: true };
    expect(car).toEqual(carResult);
  });

  test('gets all cars from state', () => {
    const allCars = getCars(state);
    const carResults = [
      { id: 'abcd1234', plate: 'abc123', make: 'Toyota', model: 'Tacoma', lotUses: 5, inLot: true },
      { id: 'decf6789', plate: 'abc123', make: 'Toyota', model: 'Tacoma', lotUses: 3, inLot: false }
    ];
    carResults.forEach(car => expect(allCars).toContainEqual(car));
  });




});
