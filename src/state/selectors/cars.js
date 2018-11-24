export const getCar = (state, id) => {
  return { ...state.cars.list[id], id };
};

export const getCars = state => {
  return Object.keys(state.cars.list).map(id => {
    return getCar(state, id);
  });
};

export const searchCars = (state) => {
  const { list, searchTerm } = state.cars;
  const matches = ['plate', 'make', 'model'];
  return Object.keys(list).reduce((acc, id) => {
    if(matches.some(key => list[id][key].includes(searchTerm))){
      acc.push(getCar(state, id));
    }
    return acc;
  }, []);
};
