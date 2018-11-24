export const LOT_CAR_ARRIVED = 'LOT_CAR_ARRIVED';
export const lotCarArrived = ({ id, plate, make, model, lotUses }) => ({
  type: LOT_CAR_ARRIVED,
  payload: { id, plate, make, model, lotUses }
});

export const LOT_CAR_DEPARTED = 'LOT_CAR_DEPARTED';
export const lotCarDeparted = id => ({
  type: LOT_CAR_DEPARTED,
  payload: id
});

export const LOT_UPDATE_CAR_SEARCH_TERM = 'LOT_UPDATE_CAR_SEARCH_TERM';
export const lotUpdateCarSearchTerm = searchTerm => ({
  type: LOT_UPDATE_CAR_SEARCH_TERM,
  payload: searchTerm
});
