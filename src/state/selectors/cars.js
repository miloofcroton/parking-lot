export const getCars = state => {
  return Object.keys(state.cars.list).map(id => {
    return getCar(state, id);
  });
};

export const getCar = (state, id) => {
  return { ...state.cars.list[id], id };
};

export const searchCars = (state) => {
  const { list } = state.cars;
  const matches = ['plate', 'make', 'model'];
  return Object.keys(list).filter(id => {
    matches.some(key => list[id][key].includes(state.searchTerm));
  });
};
