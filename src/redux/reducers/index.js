import { combineReducers } from 'redux';
import httpResponseReducer from './httpResponseReducer';
import brokerReducer from './bokerReducer';
import themeReducer from './themeReducer';

export default combineReducers({
  httpResponse: httpResponseReducer,
  brokerList: brokerReducer,
  theme: themeReducer,
});
