export const getCars = state => {
  return Object.keys(state.cars.list).map(id => {
    return getCar(state, id);
  });
};

export const getCar = (state, id) => {
  return { ...state.cars.list[id], id };
};
