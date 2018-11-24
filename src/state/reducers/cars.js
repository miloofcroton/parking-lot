import { REGISTER_CAR, CAR_UPDATE_CAR_SEARCH_TERM } from '../actions/cars';
import uuid from 'uuid/v4';
import { cars } from '../../testing/fixtures/fakeCars';

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
