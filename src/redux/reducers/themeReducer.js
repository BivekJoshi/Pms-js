const initialState = {
  mode: 'light', // Initial state for mode
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        mode: action?.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
