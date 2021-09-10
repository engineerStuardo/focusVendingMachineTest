import {VendingMachineActions} from '../types/VendingMachineTypes';

const initialState = {
  data: [],
  loading: false,
  dispatchData: [],
  dispatched: [],
  count: 0,
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
      const newItem = {...action.payload.item, count: state.count};
      return {
        ...state,
        dispatchData: [...state.dispatchData, newItem],
        count: state.count + 1,
      };
    case VendingMachineActions.DISPATCHED:
      const newData = state.dispatchData.filter(
        item =>
          item.id !== action.payload.item.id &&
          item.count !== action.payload.item,
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
