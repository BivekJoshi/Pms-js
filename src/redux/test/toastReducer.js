import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_DATA_FAILURE,
  UPDATE_DATA_REQUEST,
  UPDATE_DATA_SUCCESS,
  UPDATE_DATA_FAILURE,
  DELETE_DATA_REQUEST,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_FAILURE
} from './toastActionType';

const initialState = {
  data: [],
  loading: false,
  error: null
};

const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
    case POST_DATA_REQUEST:
    case UPDATE_DATA_REQUEST:
    case DELETE_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload]
      };
    case UPDATE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.map(item => item.id === action.payload.id ? action.payload : item)
      };
    case DELETE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.filter(item => item.id !== action.payload)
      };
    case FETCH_DATA_FAILURE:
    case POST_DATA_FAILURE:
    case UPDATE_DATA_FAILURE:
    case DELETE_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default toastReducer;
