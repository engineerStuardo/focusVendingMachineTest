import {VendingMachineActions} from '../types/VendingMachineTypes';
import {getData} from '../../services/Services';

export const getDataVendingMachine = () => {
  return async dispatch => {
    dispatch(getDataStarted());
    try {
      const data = await getData();
      dispatch(getDataSuccess(data));
    } catch (error) {
      dispatch(getDataFailure(error));
    }
  };
};

const getDataStarted = () => ({type: VendingMachineActions.STARTED});

const getDataSuccess = data => ({
  type: VendingMachineActions.SUCCESFUL,
  payload: {data},
});

const getDataFailure = error => ({
  type: VendingMachineActions.FAILURE,
  payload: error,
});
