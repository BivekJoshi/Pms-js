import { SET_FORM, USER_LOGIN } from "../types/types"

const initialState = {}

const userReducer = (state = initialState, action) => {
  console.log("🚀 ~ userReducer ~ action:", action)

  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        ...action.payload,
      }
    case SET_FORM:
      return {
        ...state,
        currentForm: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
