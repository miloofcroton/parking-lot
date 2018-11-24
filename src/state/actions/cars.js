export const REGISTER_CAR = 'REGISTER_CAR';
export const registerCar = (make, model, plate) => ({
  type: REGISTER_CAR,
  payload: { make, model, plate }
});

export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const updateSearch = (searchTerm) => ({
  type: UPDATE_SEARCH,
  payload: searchTerm
});

export const CAR_ARRIVED = 'CAR_ARRIVED';
export const carArrived = id => ({
  type: CAR_ARRIVED,
  payload: id
});

export const CAR_DEPARTED = 'CAR_DEPARTED';
export const carDeparted = id => ({
  type: CAR_DEPARTED,
  payload: id
});
