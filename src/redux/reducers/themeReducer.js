const mode =
  window?.localStorage.getItem('themeMode') === 'light' ? 'light' : 'dark';
const initialState = {
  mode: mode,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      window.localStorage.setItem('themeMode', action?.payload);
      return {
        mode: action?.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
