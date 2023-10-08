const initialState = {
  authToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        authToken: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
