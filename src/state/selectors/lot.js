export const isCar = (state, id) => {
  if(state.lot.list[id]) return true;
};

export const getLotCar = (state, id) => {
  return { ...state.lot.list[id], id };
};

export const getLotCars = state => {
  return Object.keys(state.lot.list).map(id => {
    return getLotCar(state, id);
  });
};

export const searchLotCars = state => {
  const { list, searchTerm } = state.lot;
  const matches = ['plate', 'make', 'model'];
  return Object.keys(list).reduce((acc, id) => {
    if(matches.some(key => list[id][key].includes(searchTerm))){
      acc.push(getLotCar(state, id));
    }
    return acc;
  }, []);
};
