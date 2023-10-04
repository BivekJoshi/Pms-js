import { updateObject } from '../../utility/utility';

const initialState = {
  responseStatus: null,
  message: null,
  count: 1,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'success':
      return updateObject(state, {
        responseStatus: 'success',
        message: action.message,
        count: state.count + 1,
      });
    case 'processing':
      return updateObject(state, {
        responseStatus: 'processing',
        message: action.message,
        count: state.count + 1,
      });
    case 'warning':
      return updateObject(state, {
        responseStatus: 'warning',
        message: action.message,
        count: state.count + 1,
      });

    case 'failed':
      return updateObject(state, {
        responseStatus: 'failed',
        message: action.message,
        count: state.count + 1,
      });
    case 'initiated':
      return updateObject(state, {
        responseStatus: null,
        message: 'Request Initialized',
      });
    default:
      return state;
  }
};

export default reducer;
