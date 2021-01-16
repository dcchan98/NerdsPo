import React from "react"

import { connect } from "react-redux"
import { deleteFood } from "../actions"

function FoodItem(props) {
  return (
    <>
      <tr>
        <td>
          <button onClick={() => props.deleteFood(props.food)}>Delete!</button>
          {props.food.getName()}
        </td>
        <td>{props.food.getP()}</td>
        <td>{props.food.getC()}</td>
        <td>{props.food.getF()}</td>
        <td>{props.food.getTotalCalories()}</td>
      </tr>
    </>
  )
}

const mapStateToProps = state => {
  return { foodList: state.foodList }
}

export default connect(mapStateToProps, { deleteFood })(FoodItem)
