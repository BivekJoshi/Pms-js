import { axiosInstance } from '../../api/axiosInterceptor';
import { convertObjectToURL } from '../../utility/ConvertObjectIntoURL';
import {
  FETCH_PAGINATED_SELECT,
  FETCH_PAGINATED_SELECT_FAILED,
  PAGINATED_SELECT_DATA_CLEAR,
} from '../types/types';
import { initiated, processing } from './httpResponse';

export const fetchPaginatedTable = (
  path,
  params,
  page,
  key,
  responseDatakey,
  pagetotal,
  convertObjectToURLString
) => {
  return async (dispatch) => {
    dispatch(initiated());
    dispatch(processing(true));
    try {
      if (page) {
        path = path + `?pageNumber=${page}`;
      } else {
        path = path + `?pageNumber=0`;
      }

      if (convertObjectToURLString) {
        path = path + '&' + convertObjectToURL(params);
        params = null;
      }
      let response = null;
      response = await axiosInstance.get(path, {
        params: params,
      });
      dispatch(clearPaginatedData());

      dispatch({
        type: FETCH_PAGINATED_SELECT,
        payload: response.data,
        page: page,
        key: key,
        responseDatakey: responseDatakey,
        total: pagetotal,
      });
    } catch (err) {
      //errType is provided on fetch error so that state turns into initial if fetched failed ..for other cases state doesnot turn into initial state
      dispatch({
        type: FETCH_PAGINATED_SELECT_FAILED,
        payload: err,
        errType: 'fetch',
      });
    }
  };
};

export const clearPaginatedData = () => {
  return (dispatch) => dispatch({ type: PAGINATED_SELECT_DATA_CLEAR });
};
