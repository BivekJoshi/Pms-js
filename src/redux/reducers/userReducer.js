const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
