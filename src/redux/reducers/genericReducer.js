import _ from "lodash";
import {
  CLEAR_DATA,
  FETCH_DATA,
  POST_DATA,
  PATCH_DATA,
  PROCESSING,
  DELETE_DATA,
  EDIT_DATA,
  PATCH_PARENT_DATA,
  UPDATE_TABLE_DATA,
} from "../types/types";

const initialState = {
  error: null,
  data: [],
  processing: false,
};
const genericReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return searchResult(action);
    case DELETE_DATA:
      return deleteData(state, action.payload);
    case POST_DATA:
      return postDataClinetSetupMaster(action.payload);
    case PATCH_DATA:
      return patchData(action.payload, state);
    case CLEAR_DATA:
      return { ...initialState };
    case PROCESSING:
      return { ...state, processing: action.processing };
    case "GENERIC_PUT_REMOVE":
      return putRemove(state, action.payload);
    case EDIT_DATA:
      return dataEdit(action.payload, state);
    case UPDATE_TABLE_DATA:
      return updateData(state, action.payload);
    case PATCH_PARENT_DATA:
      return parentData(action.payload, state);
    default:
      return state;
  }
};

//Used In CLient-Setup Master Post
const postDataClinetSetupMaster = (action) => {
  var stateClone = { ...initialState };
  const updatedStateData = action.data;
  stateClone.processing = false;
  stateClone.data = updatedStateData;
  return stateClone;
};

const deleteData = (state, index) => {
  // debugger;
  var stateClone = { ...state };
  var cloneData = [...stateClone.data];
  cloneData.splice(index, 1);
  stateClone.processing = false;
  stateClone.data = cloneData;
  return stateClone;
};

const patchData = (action, state) => {
  var stateClone = { ...state };
  // const updatedStateData = action.data;
  stateClone.processing = false;
  // stateClone.data = updatedStateData;
  return stateClone;
};
const searchResult = (action) => {
  var stateClone = { ...initialState };
  const updatedStateData = action.payload;
  stateClone.processing = false;
  stateClone.data = updatedStateData;
  return stateClone;
};

const putRemove = (state, payload) => {
  var stateClone = { ...state };
  let { response, key } = payload;
  if (!key) key = "id";
  let data = { ..._.mapKeys(stateClone.data, key) };
  for (let index in response) {
    data = _.omit(data, response[index][key]);
  }
  stateClone.processing = false;
  stateClone.data = Object.values(data);
  stateClone.error = null;
  return stateClone;
};
const dataEdit = (payload, state) => {
  var stateClone = { ...state };
  let response = payload;
  let data = stateClone.data.map((d) => {
    if (d.id === response.id) {
      return response;
    } else return { ...d };
  });
  stateClone.processing = false;
  stateClone.data = data;
  return stateClone;
};
const updateData = (state, payload) => {
  let stateClone = { ...state };
  const { companyId, id } = payload;
  const company = stateClone.data.find((d) => d.companyId === companyId);

  if (company) {
    const stockAlertResponse = company.stockAlertResponses.find(
      (response) => response.id === id
    );
    if (stockAlertResponse) {
      for (const key in payload) {
        if (key !== "companyId" && key !== "id") {
          stockAlertResponse[key] = payload[key];
        }
      }
    }
  }
  return stateClone;
};
const parentData = (action, state) => {
  var stateClone = { ...state };
  const updatedStateData = action.data;
  stateClone.processing = false;
  stateClone.data = updatedStateData;
  return stateClone;
};
export default genericReducer;
