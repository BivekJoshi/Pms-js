const initialState = {
  details: {},
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        details: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
