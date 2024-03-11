const initialState = {}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FORM":
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default formReducer
