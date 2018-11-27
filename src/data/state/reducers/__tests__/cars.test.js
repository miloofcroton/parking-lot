import reducer from '../index';
import { REGISTER_CAR, UPDATE_SEARCH } from '../../actions/cars';
import { fakeCarNewWithId, fakeCarNew } from '../../../../testing/fixtures/fakeCars';

describe('reducer', () => {

  const car = fakeCarNewWithId();
  const state = {
    cars: {
      searchTerm: 'asdf',
      list: { ...car }
    }
  };

  it('returns an initialState', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('handles a REGISTER_CAR and updates cars.list in state', () => {
    const newCar = fakeCarNew();
    const newState = reducer(state, {
      type: REGISTER_CAR,
      payload: newCar
    });
    // expect(newState).toEqual({ ...state, cars: { ...state.cars, list: { ...state.cars.list, [expect.any(String)]: newCar } } });
    expect(Object.values(newState.cars.list)).toContainEqual(newCar);
  });

  it('handles a UPDATE_SEARCH and updates searchTerm in state', () => {
    const searchTerm = 'asdf';
    const newState = reducer(state, {
      type: UPDATE_SEARCH,
      payload: searchTerm
    });
    expect(newState).toEqual({ ...state, cars: { ...state.cars, searchTerm } });
  });

});
