import { DELETE_DATA_FAILURE, DELETE_DATA_REQUEST, DELETE_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS, UPDATE_DATA_FAILURE, UPDATE_DATA_REQUEST, UPDATE_DATA_SUCCESS } from './toastActionType';

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error
});

// Action creators for adding data
export const postDataRequest = () => ({
  type: POST_DATA_REQUEST
});

export const postDataSuccess = (data) => ({
  type: POST_DATA_SUCCESS,
  payload: data
});

export const postDataFailure = (error) => ({
  type: POST_DATA_FAILURE,
  payload: error
});

// Action creators for updating data
export const updateDataRequest = () => ({
  type: UPDATE_DATA_REQUEST
});

export const updateDataSuccess = (data) => ({
  type: UPDATE_DATA_SUCCESS,
  payload: data
});

export const updateDataFailure = (error) => ({
  type: UPDATE_DATA_FAILURE,
  payload: error
});

// Action creators for deleting data
export const deleteDataRequest = () => ({
  type: DELETE_DATA_REQUEST
});

export const deleteDataSuccess = (id) => ({
  type: DELETE_DATA_SUCCESS,
  payload: id
});

export const deleteDataFailure = (error) => ({
  type: DELETE_DATA_FAILURE,
  payload: error
});