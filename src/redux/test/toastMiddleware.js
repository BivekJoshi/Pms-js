// middleware.js

import axios from 'axios';
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  postDataRequest,
  postDataSuccess,
  postDataFailure,
  updateDataRequest,
  updateDataSuccess,
  updateDataFailure,
  deleteDataRequest,
  deleteDataSuccess,
  deleteDataFailure
} from './toastActions';
import { getBankKycData } from '../../api/Kyc/Demat/demat_api';

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await axios.get(getBankKycData);
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export const postData = (data) => {
  return async (dispatch) => {
    dispatch(postDataRequest());
    try {
      const response = await axios.post(getBankKycData, data);
      dispatch(postDataSuccess(response.data));
    } catch (error) {
      dispatch(postDataFailure(error.message));
    }
  };
};

export const updateData = (id, data) => {
  return async (dispatch) => {
    dispatch(updateDataRequest());
    try {
      const response = await axios.put(`getBankKycData/${id}`, data);
      dispatch(updateDataSuccess(response.data));
    } catch (error) {
      dispatch(updateDataFailure(error.message));
    }
  };
};

export const deleteData = (id) => {
  return async (dispatch) => {
    dispatch(deleteDataRequest());
    try {
      await axios.delete(`your-api-url/${id}`);
      dispatch(deleteDataSuccess(id));
    } catch (error) {
      dispatch(deleteDataFailure(error.message));
    }
  };
};
