import * as actionTypes from "../types/types";
import _ from "lodash";
const initialSate = {
  error: null,
  data: {},
  secondData: [],
  processing: false,
};

const matCrudReducer = (state = initialSate, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TABLE:
      return fetchTable(action);
    case actionTypes.ADD_ROW:
      return addOrEdit(state, action.payload);
    case actionTypes.EDIT_ROW:
      return addOrEdit(state, action.payload);
    case actionTypes.DELETE_ROW:
      return deleteRow(state, action.payload);
    case actionTypes.FETCH_TABLE_COA:
      return fetchTableCOA(action);
    case actionTypes.ADD_ROW_COA:
      return addOrEditCOA(state, action.payload);
    case actionTypes.EDIT_ROW_COA:
      return addOrEditCOA(state, action.payload);
    case actionTypes.DELETE_ROW_COA:
      return deleteRowCOA(state, action.payload);
    case actionTypes.FAILED:
      return failed(state, action);
    case actionTypes.PROCESSING:
      return { ...state, processing: action.processing };
    case actionTypes.FETCH_VOUCHER_APPROVE:
      return fetchVoucherApprove(action);
    case actionTypes.CLEAR_CRUD_TABLE_DATA:
      return initialSate;
    default:
      return state;
  }
};

//-----For CRUDTABLES (MOSTLY SETUP)--------//
const fetchTable = (action) => {
  var stateClone = { ...initialSate };
  if (action.payload && action.payload.length > 0) {
    let uniqueKey = action.payload[0].id ? "id" : "entityId";
    const updatedStateData = {
      ..._.mapKeys(action.payload, uniqueKey),
    };
    stateClone.data = updatedStateData;
  }
  // in case of transaction report
  else if (_.isObject(action.payload)) {
    if (action.payload?.income) {
      const updatedStateData = {
        ..._.mapKeys(action.payload.income, "id"),
      };
      stateClone.data = updatedStateData;
      let groupedData = action.payload.transaction.reduce(
        (result, currentValue) => {
          // If an array already present for key, push it to the array. Else create an array and push the object
          (result[currentValue.date] = result[currentValue.date] || []).push(
            currentValue
          );
          // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
          return result;
        },
        {}
      ); // empty object is the initial value for result object
      let finalData = [];

      for (let elem in groupedData) {
        let element = groupedData[elem];
        let buy = 0;
        let sell = 0;
        let total = 0;
        let netAmount = 0;
        let date = element[0].date;
        for (let index in element) {
          buy = buy + Number(element[index].buy || 0);
          sell = sell + Number(element[index].sale || 0);
          total = total + buy + sell;
          netAmount =
            netAmount +
            (Number(element[index].buy || 0) -
              Number(element[index].sale || 0));
        }
        finalData.push({
          date: date,
          buy: buy,
          sale: sell,
          total: total,
          netAmount: netAmount,
        });
      }

      stateClone.secondData = finalData;
    }
  }

  stateClone.processing = false;

  return stateClone;
};

const addOrEdit = (state, payload) => {
  //response is usually { ...} or {data:{...},message:''}}
  let res = payload;
  if (payload.data) res = payload.data;
  if (res.id) {
    var stateClone = { ...state };
    const updatedStateData = {
      ...stateClone.data,
      [res.id]: res,
    };
    stateClone.processing = false;
    stateClone.data = updatedStateData;
    stateClone.error = null;
    stateClone.processing = false;
    return stateClone;
  }
  return state;
};

const deleteRow = (state, id) => {
  var stateClone = { ...state };
  var updatedStatetData = _.omit(stateClone.data, id);
  stateClone.data = updatedStatetData;
  stateClone.error = null;
  stateClone.processing = false;
  return stateClone;
};

//-----For COA (SETUP)--------//
const fetchTableCOA = (action) => {
  var stateClone = { ...initialSate };
  const newData = action.payload.map((data) => {
    return { ...data, acCode: "_" + data.acCode };
  });
  const updatedStateData = {
    ..._.mapKeys(newData, "acCode"),
  };
  stateClone.processing = false;
  stateClone.data = updatedStateData;
  return stateClone;
};

const addOrEditCOA = (state, action) => {
  var stateClone = { ...state };
  var acCode = "_" + action.acCode;
  const updatedStateData = {
    ...stateClone.data,
    [acCode]: { ...action, acCode: acCode },
  };
  stateClone.data = updatedStateData;
  stateClone.error = null;
  return stateClone;
};

const deleteRowCOA = (state, id) => {
  const delId = id;
  var stateClone = { ...state };
  var updatedStatetData = _.omit(stateClone.data, delId);
  stateClone.data = updatedStatetData;
  stateClone.error = null;
  return stateClone;
};

const failed = (state, action) => {
  if (action.errType) {
    return { ...initialSate, error: action.payload };
  } else {
    return { ...state, processing: false, error: action.payload };
  }
};
//-----*********************--------//

//Voucher Approve
const fetchVoucherApprove = (action) => {
  var stateClone = { ...initialSate };
  const updatedStateData = {
    ..._.mapKeys(action.payload, "voucherNo"),
  };
  stateClone.processing = false;
  stateClone.data = updatedStateData;
  return stateClone;
};

//Voucher Post

export default matCrudReducer;
