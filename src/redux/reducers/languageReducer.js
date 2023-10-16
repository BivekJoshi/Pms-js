const initialState = {
  mode: 'EN', // Initial state for mode
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LANGUAGE':
      return {
        mode: action?.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
