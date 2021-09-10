import {combineReducers} from 'redux';

import {VendingMachineReducer} from './reducers/VendingMachineReducer';

export const rootReducer = combineReducers({
  VendingMachineReducer,
});
