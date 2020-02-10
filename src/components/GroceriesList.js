import React from "react"
import { connect } from "react-redux"
import { setGroceries } from "../store"

const GroceriesList = props => {
  console.log("groceries List props", props)
  return (
    <div>
      <h2 onClick={props.getSomeGroceries}>Your groceries:</h2>
      <ul>
        {props.groceries.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = reduxState => {
  return {
    otherName: "priti",
    groceries: reduxState.groceries
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSomeGroceries: () =>
      dispatch(
        setGroceries([
          { id: 1, name: "Broccoli" },
          { id: 2, name: "Apples" },
          { id: 3, name: "Bananas" }
        ])
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceriesList)
