import {VendingMachineActions} from '../types/VendingMachineTypes';

initialState = {
  data: [],
  loading: false,
  dispatch: [],
  dispatched: [],
  error: '',
};

export const VendingMachineReducer = (state = initialState, action) => {
  switch (action.type) {
    case VendingMachineActions.STARTED:
      return {
        ...state,
        loading: true,
      };
    case VendingMachineActions.SUCCESFUL:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case VendingMachineActions.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
