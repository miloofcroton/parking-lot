import {
  REGISTER_CAR, registerCar,
  UPDATE_SEARCH, updateSearch
} from '../cars.js';

describe('cars actions', () => {

  test('registers car', () => {
    const car = {
      plate: 'abc123',
      make: 'Toyota',
      model: 'Tacoma'
    };
    const action = registerCar(car);
    expect(action.type).toEqual(REGISTER_CAR);
    expect(action.payload).toEqual(car);
  });

  test('updates the search', () => {
    const searchTerm = 'asdf';
    const action = updateSearch(searchTerm);
    expect(action.type).toEqual(UPDATE_SEARCH);
    expect(action.payload).toEqual(searchTerm);
  });



});
