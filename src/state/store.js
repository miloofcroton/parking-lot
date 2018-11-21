import { createStore } from 'redux';
import reducer from './reducers'; // same as './reducers/index'
import {
  registerCar,
  carUpdateCarSearchTerm
} from './actions/cars';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  store.getState();
  console.log('State Changes!');
});

console.log(store.getState());

store.dispatch(registerCar({
  make: 'Toyota',
  model: 'Tacoma',
  plate: 'No',
  inLot: false,
  lotUses: 5,
}));
store.dispatch(registerCar(new Date, 1.05));
store.dispatch(registerCar(new Date, 1.35));
store.dispatch(carUpdateCarSearchTerm(new Date, 10.35));
store.dispatch(carUpdateCarSearchTerm(new Date, 13.35));

export default store;
