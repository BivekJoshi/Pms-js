const initialState = {
  brokerOption: null, // Initial state for brokerOption
};

const brokerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BROKER_OPTION':
      return {
        ...state,
        brokerOption: action.payload,
      };
    default:
      return state;
  }
};

export default brokerReducer;
