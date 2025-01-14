import { SET_FORM, SET_MINOR, USER_LOGIN } from "../types/types"

const initialState = {}

const userReducer = (state = initialState, action) => {
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
      case SET_MINOR:
        return {
          ...state,
          isMinor: action.payload,
        }

    default:
      return state
  }
}

export default userReducer
