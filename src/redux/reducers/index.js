import { combineReducers } from 'redux';
import httpResponseReducer from './httpResponseReducer';
import brokerReducer from './bokerReducer';
import authReducer from './auth';

export default combineReducers({
  httpResponse: httpResponseReducer,
  brokerList: brokerReducer,
  auth: authReducer,
});
