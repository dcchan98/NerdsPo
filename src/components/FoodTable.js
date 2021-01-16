import React from "react"
import FoodItem from "./FoodItem"

import Food from "../model/food"

import Table from "react-bootstrap/Table"
import { connect } from "react-redux"

function FoodTable(props) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Food Item</th>
            <th>Proteins</th>
            <th>Carbs</th>
            <th>Fats</th>
            <th>Kcal</th>
          </tr>
        </thead>
        <tbody>
          {/* Render food item here */}
          {props.foodList.length != 0
            ? props.foodList.map(foodObj => <FoodItem food={foodObj} />)
            : []}
        </tbody>
      </Table>
    </>
  )
}

const mapStateToProps = state => {
  return { foodList: state.foodList }
}

export default connect(mapStateToProps)(FoodTable)
