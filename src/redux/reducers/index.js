import { combineReducers } from 'redux';
import httpResponseReducer from './httpResponseReducer';
import brokerReducer from './bokerReducer';

export default combineReducers({
  httpResponse: httpResponseReducer,
  brokerList: brokerReducer,
});
