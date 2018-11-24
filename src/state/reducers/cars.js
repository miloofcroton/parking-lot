import { REGISTER_CAR, CAR_UPDATE_CAR_SEARCH_TERM } from '../actions/cars';
import { LOT_CAR_ARRIVED, LOT_CAR_DEPARTED } from '../actions/lot';
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
    case LOT_CAR_ARRIVED:
      return {
        searchTerm: state.searchTerm,
        list: {
          ...state.list,
          [payload]: { ...state.list[payload], inLot: true }
        }
      };
    case LOT_CAR_DEPARTED:
      return {
        searchTerm: state.searchTerm,
        list: {
          ...state.list,
          [payload]: { ...state.list[payload], inLot: false }
        }
      };
    default:
      return state;
  }
}
