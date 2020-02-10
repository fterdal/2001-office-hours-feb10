import React from "react"
import { Provider } from "react-redux"
import store from "../store"
import GroceriesList from "./GroceriesList"

const Root = () => {
  return (
    <Provider store={store}>
      <h1>Welcome to React!</h1>
      <GroceriesList name="finn" />
    </Provider>
  )
}

export default Root
