const initialState = {
  details: {},
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        details: action.payload.user,
      };
    default:
      return state;
  }
};
export default userReducer;
