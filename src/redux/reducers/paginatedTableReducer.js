import {
  FETCH_PAGINATED_SELECT,
  FETCH_PAGINATED_SELECT_FAILED,
  FETCH_PAGINATED_SUMMARY_SELECT,
  PAGINATED_SELECT_DATA_CLEAR,
  PAGINATED_SELECT_DATA_UPDATE,
  PAGINATED_SELECT_PROCESSING,
  REMOVE_ARRAY_OF_DATA,
  UPDATE_SINGLE_ROW,
} from './../types/types';
const initialSate = {
  error: null,
  data: {},
  //Extras like unmatched bank in Client Upload
  extras: {},
  processing: false,
  total: 0,
  itemsPerPage: 1000,
  page: 0,
  pages: 1,
};

const PaginatedSelectReducer = (state = initialSate, action) => {
  switch (action.type) {
    case FETCH_PAGINATED_SELECT:
      return fetchPaginatedSelectTable(action);
    case FETCH_PAGINATED_SUMMARY_SELECT:
      return fetchSummaryPaginationTable(action);
    case PAGINATED_SELECT_DATA_UPDATE:
      return updatePaginatedSelectTable(state, action);
    case UPDATE_SINGLE_ROW:
      return updateSingleRow(state, action);
    case FETCH_PAGINATED_SELECT_FAILED:
      return failed(state, action);
    case PAGINATED_SELECT_PROCESSING:
      return { ...state, processing: action.processing };
    case PAGINATED_SELECT_DATA_CLEAR:
      return initialSate;
    case REMOVE_ARRAY_OF_DATA:
      return removeDatas(state, action);
    case 'UPDATE_EXTRAS':
      return {
        ...state,
        extras: { ...state.extras, [action.key]: action.payload },
      };
    case 'REMOVE_EXTRAS':
      return removeExtras(state, action);

    case 'CHANGE_PAGE_LOCALLY':
      return { ...state, page: action.payload };
    case 'CLEAR_PG_DATA':
      return {
        ...state,
        total: 0,
        processing: false,
        extras: { ...state.extras, [action.payload]: [] },
      };
    default:
      return state;
  }
};

const fetchPaginatedSelectTable = (action) => {
  var stateClone = { ...initialSate };
  let updatedStateData = {};
  // For Client Upload
  let actualData = action.responseDatakey
    ? action.payload[action.responseDatakey]
    : action.payload.data
    ? action.payload.data
    : action.payload;
  updatedStateData = {
    ..._.mapKeys(actualData, action.key),
  };
  let pages = 1;
  const totalNoOfData = action.total || action.payload.total;
  if (action.payload.pageSize) {
    let remainder = totalNoOfData % action.payload.pageSize;
    pages = ~~(totalNoOfData / action.payload.pageSize);
    if (remainder > 0) pages = pages + 1;
  }
  stateClone.total = totalNoOfData ? totalNoOfData : action.payload.record;
  if (action.payload.unmatchBank)
    stateClone.extras.unmatchBank = action.payload.unmatchBank;
  if (action.payload.both) stateClone.extras.both = action.payload.both;
  stateClone.page = action.page ? action.page : 0;
  stateClone.itemsPerPage = action.payload.pageSize || 1000;
  stateClone.processing = false;
  stateClone.pages = pages;
  stateClone.data = updatedStateData;
  return stateClone;
};
const fetchSummaryPaginationTable = (action) => {
  var stateClone = { ...initialSate };
  let updatedStateData = {};
  if (action.payload.category) {
    const newData = action.payload.data.map((data) => {
      return {
        ...data,
        category: action.payload.category.find((d) => d.id === data.category)
          ?.name,
        riskType:
          data.riskType === 'H'
            ? 'High'
            : data.riskType === 'M'
            ? 'Medium'
            : 'Low',
      };
    });
    updatedStateData = newData;
  } else updatedStateData = action.payload.data;
  let pages = 1;
  let pageSize = action.payload.pageSize ? action.payload.pageSize : 1000;
  const totalNoOfData = action.total || action.payload.total;
  let remainder = totalNoOfData % pageSize;
  pages = ~~(totalNoOfData / pageSize);
  if (remainder > 0) pages = pages + 1;
  stateClone.itemsPerPage = action.payload.pageSize || 1000;
  stateClone.total = totalNoOfData;
  stateClone.pages = pages;
  stateClone.page = action.page ? action.page : 0;
  stateClone.data = updatedStateData;
  return stateClone;
};

const updatePaginatedSelectTable = (state, action) => {
  var data = action.deleteId ? action.deleteId : action.payload;
  var stateClone = { ...state };
  var updatedStatetData = null;
  if (action.extraKey) {
    updatedStatetData = {
      ..._.mapKeys(state.extras[action.extraKey], 'id'),
    };
    for (let index in data) {
      updatedStatetData = _.omit(updatedStatetData, data[index].id);
    }
    stateClone.processing = false;
    stateClone.extras[action.extraKey] = Object.values(updatedStatetData);
    stateClone.error = null;
    return stateClone;
  } else {
    updatedStatetData = stateClone.data;
    let count = 0;
    for (let index in data) {
      updatedStatetData = _.omit(updatedStatetData, data[index]);
      count++;
    }
    stateClone.total = stateClone.total - count;
    stateClone.processing = false;
    stateClone.data = updatedStatetData;
    stateClone.error = null;
    return stateClone;
  }
};

const removeDatas = (state, action) => {
  var data = action.payload;
  var stateClone = { ...state };
  var updatedStatetData = stateClone.data;
  for (let index in data) {
    updatedStatetData = _.omit(updatedStatetData, data[index]);
  }
  stateClone.total = Object.keys(updatedStatetData).length;
  stateClone.processing = false;
  stateClone.data = updatedStatetData;
  stateClone.error = null;
  return stateClone;
};

const updateSingleRow = (state, action) => {
  var data = action.payload;
  var stateClone = { ...state };
  var updatedStatetData = stateClone.data;
  updatedStatetData = _.omit(updatedStatetData, data);
  stateClone.processing = false;
  stateClone.data = updatedStatetData;
  stateClone.error = null;
  return stateClone;
};

const failed = (state, action) => {
  if (action.errType) {
    return { ...initialSate, error: action.payload };
  } else {
    return { ...state, error: action.payload, processing: false };
  }
};

const removeExtras = (state, action) => {
  const { payload, key } = action;
  const stateClone = { ...state };
  const extrasClone = { ...stateClone.extras };
  let newExtras = extrasClone[key].filter((item) => item !== payload);
  stateClone.extras[key] = newExtras;
  return stateClone;
};

export default PaginatedSelectReducer;
