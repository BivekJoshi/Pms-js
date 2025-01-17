import toast from "react-hot-toast";
import { axiosInstance } from "../../api/axiosInterceptor";
import {
  DELETE_DATA,
  FETCH_DATA,
  PROCESSING,
  UPDATE_TABLE_DATA,
} from "../types/types";
import { initiated } from "./httpResponse";
import { getErrorMessage } from "../../utility/getErrorMessage";

export const fetchData = (
  path,
  addtionalFilterFunction,
  params,
  method = "GET",
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
          "Content-Type": header ? "text/plain" : "application/json",
        },
      });

      if (addtionalFilterFunction) {
        response = addtionalFilterFunction(response.data);
      } else response = response.data;
      dispatch({ type: FETCH_DATA, payload: response });
      toast.success("Success");
    } catch (err) {
      toast.error(err?.response?.data?.message);
      dispatch(genericProcessing(false));
    }
  };
};
export const deleteData = (path, id, index, resolve, reject, data) => {
  return async (dispatch) => {
    dispatch(initiated());
    try {
      const response = await axiosInstance.delete(path + "/" + id, {
        data: data,
      });
      dispatch({ type: DELETE_DATA, payload: index });
      resolve(response.data);
      toast.success(" Success");
    } catch (err) {
      toast.error(err.message);
      reject();
    }
  };
};
export const putData = (path, id, data, resolve, reject) => {
  return async (dispatch) => {
    dispatch(initiated());
    try {
      await axiosInstance.put(path + "/" + id, data);
      dispatch({ type: UPDATE_TABLE_DATA, payload: data });
      resolve();
    } catch (error) {
      toast.error(getErrorMessage(error));
      reject();
    }
  };
};
export const genericProcessing = (val) => {
  return {
    type: PROCESSING,
    processing: val,
  };
};
