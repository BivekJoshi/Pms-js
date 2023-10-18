import toast from 'react-hot-toast';
import { axiosInstance } from '../../api/axiosInterceptor';
import { FETCH_DATA } from '../types/types';
import { initiated } from './httpResponse';
import { genericProcessing } from './genericData';

export const fetchData = (
  path,
  addtionalFilterFunction,
  params,
  method = 'GET',
  data = null,
  header = null
) => {
  return async (dispatch, getState) => {
    dispatch(genericProcessing(true));
    dispatch(initiated());
    try {
      // let response = await axiosInstance.get(path, { params: params });
      let response = await axiosInstance({
        url: path,
        method: method,
        data: data,
        params: params,
        headers: {
          'Content-Type': header ? 'text/plain' : 'application/json',
        },
      });

      if (addtionalFilterFunction) {
        response = addtionalFilterFunction(response.data);
      } else response = response.data;
      dispatch({ type: FETCH_DATA, payload: response });
      toast.success('Data fetched');
    } catch (err) {
      toast.error(err?.response?.data?.message);
      dispatch(genericProcessing(false));
    }
  };
};
