import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import * as actions from '../redux/actions/VendingMachineActions';

export const useHome = () => {
  const dispatch = useDispatch();
  const {data, loading} = useSelector(state => state.VendingMachineReducer);

  useEffect(() => {
    dispatch(actions.getDataVendingMachine());
  }, []);

  return {data, loading};
};
