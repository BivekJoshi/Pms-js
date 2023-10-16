import { combineReducers } from 'redux';
import httpResponseReducer from './httpResponseReducer';
import brokerReducer from './bokerReducer';
import themeReducer from './themeReducer';
import userReducer from './userReducer';
import genericReducer from './genericReducer';
import languageReducer from './languageReducer';

export default combineReducers({
  httpResponse: httpResponseReducer,
  brokerList: brokerReducer,
  theme: themeReducer,
  language: languageReducer,
  user: userReducer,
  generic: genericReducer,
});
