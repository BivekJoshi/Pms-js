import { axiosInstance } from "../../api/axiosInterceptor";
import * as actionTypes from "../types/types";

export const fetchTable = (path, params) => {
  return async (dispatch) => {
    //Reset HttpResponse Status -- Needed to ReRender Toast
    // dispatch(initiated());
    //Set Processing state for DataTable---For SPinner in datatable
    dispatch(processing());
    try {
      const response = await axiosInstance.get(path, { params: params });
      dispatch({ type: actionTypes.FETCH_TABLE, payload: response.data });
    } catch (err) {
      console.log(err);
      //If failed dispatched with errtype ..data existing in datatable is removed..It is called only during fetch error
      dispatch({ type: actionTypes.FAILED, payload: err, errType: "fetch" });
    }
  };
};

export const removeItem = (key) => {
  return { type: actionTypes.DELETE_ROW, payload: key };
};

const processing = () => {
  return {
    type: actionTypes.PROCESSING,
    processing: true,
  };
};

export const changeProcessingStatusCrudTable = (status) => {
  return {
    type: actionTypes.PROCESSING,
    processing: status,
  };
};
export const clearCrudTableData = () => {
  return {
    type: actionTypes.CLEAR_CRUD_TABLE_DATA,
  };
};
