import {VendingMachineActions} from '../types/VendingMachineTypes';

initialState = {
  data: [],
  loading: false,
  dispatchData: [],
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
    case VendingMachineActions.DISPATCH:
      return {
        ...state,
        dispatchData: [...state.dispatchData, action.payload.item],
      };
    case VendingMachineActions.DISPATCHED:
      const newData = state.dispatchData.filter(
        item => item.id !== action.payload.item.id,
      );
      return {
        ...state,
        dispatchData: newData,
        dispatched: [...state.dispatched, action.payload.item],
      };
    default:
      return state;
  }
};
