import React from 'react';
import { REGISTER_CAR, registerCar } from '../cars.js';

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
});
