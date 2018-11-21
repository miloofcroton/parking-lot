import {
  REGISTER_CAR,
  CAR_UPDATE_CAR_SEARCH_TERM
} from '../actions/cars';

const initialState = {
  cars: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case REGISTER_CAR:
      return { ...state, cars: [...state['cars'], action.payload] };
    case CAR_UPDATE_CAR_SEARCH_TERM:
      return { ...state, cars: [...state['cars'], action.payload] };
    default:
      return state;
  }
}
