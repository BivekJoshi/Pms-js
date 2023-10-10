const initialState = {
  brokerOption: null,
  brokerTheme: null,
  processing: false,
};

const brokerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BROKER_OPTION':
      return {
        ...state,
        brokerOption: action.payload,
      };
    case 'SET_BROKER_OPTION_PROCESSING':
      return {
        ...state,
        processing: action.payload,
      };
    case 'SET_BROKER_THEME':
      return {
        ...state,
        brokerTheme: action.payload,
      };
    default:
      return state;
  }
};

export default brokerReducer;
