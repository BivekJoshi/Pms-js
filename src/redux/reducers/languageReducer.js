const mode =
  window?.localStorage.getItem('languageMode') === 'NP' ? 'NP' : 'EN';
const initialState = {
  mode: mode,
};
const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LANGUAGE':
      window.localStorage.setItem('languageMode', action?.payload);
      return {
        mode: action?.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
