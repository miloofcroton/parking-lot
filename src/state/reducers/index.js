import { combineReducers } from 'redux';
import carReducer from './cars';
import lotReducer from './lot';
import transactionReducer from './transactions';

export default combineReducers({
  cars: carReducer,
  lot: lotReducer,
  transactions: transactionReducer
});
