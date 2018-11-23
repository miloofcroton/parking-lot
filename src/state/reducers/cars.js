import { REGISTER_CAR, CAR_UPDATE_CAR_SEARCH_TERM } from '../actions/cars';
import uuid from 'uuid/v4';
const chance = require('chance').Chance();

const cars = Array.apply(null, { length: 100 }).reduce((acc) => {

  acc[uuid()] = {
    plate: chance.word({ length: 5 }),
    make: chance.company(),
    model: chance.animal(),
    inLot: chance.bool({ likelihood: 30 }),
    lotUses: chance.natural({ min: 0, max: 20 })
  };

  return acc;
}, {});


const initialState = {
  searchTerm: '',
  list: cars
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case REGISTER_CAR:
      return {
        searchTerm: state.searchTerm,
        list: {
          ...state.list,
          [uuid()]: { ...payload, inLot: false, lotUses: 0 }
        }
      };
    case CAR_UPDATE_CAR_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    default:
      return state;
  }
}
