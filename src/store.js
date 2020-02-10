import { createStore } from "redux"

// ACTION TYPE
const SET_GROCERIES = "SET_GROCERIES"

// ACTION CREATOR
export const setGroceries = groceries => {
  return {
    type: SET_GROCERIES,
    groceries
  }
}

const initialState = {
  groceries: [],
  currentUser: ""
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GROCERIES:
      return { ...state, groceries: action.groceries }
    default:
      return state
  }
}

const store = createStore(reducer)
export default store
