export const REGISTER_CAR = 'REGISTER_CAR';
export const registerCar = (make, model, plate) => ({
  type: REGISTER_CAR,
  payload: { make, model, plate }
});

export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: searchTerm
});

export const CAR_ARRIVED = 'CAR_ARRIVED';
export const carArrived = ({ id, plate, make, model, lotUses }) => ({
  type: CAR_ARRIVED,
  payload: { id, plate, make, model, lotUses }
});

export const CAR_DEPARTED = 'CAR_DEPARTED';
export const carDeparted = id => ({
  type: CAR_DEPARTED,
  payload: id
});
