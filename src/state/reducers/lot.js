import { LOT_UPDATE_CAR_SEARCH_TERM, LOT_CAR_ARRIVED, LOT_CAR_DEPARTED } from '../actions/lot';

const initialState = {
  list: {},
  searchTerm: ''
};

const withoutX = (list, x) => {
  const { [x]:foo, ...noX } = list;
  return noX;
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case LOT_CAR_ARRIVED:
      return {
        list: {
          ...state.list,
          [payload.id]: { ...payload, lotUses: payload.lotUses + 1 }
        },
        searchTerm: state.searchTerm
      };
    case LOT_CAR_DEPARTED:
      return {
        list: withoutX(state.list, payload),
        searchTerm: state.searchTerm
      };
    case LOT_UPDATE_CAR_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    default:
      return state;
  }
}
