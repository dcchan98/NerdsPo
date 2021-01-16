import React, { useState } from "react"
import { connect } from "react-redux"
import { addFood } from "../actions"

function FoodInput(props) {
  const [name, setName] = useState("Name")
  const [proteins, setProteins] = useState(0)
  const [carbs, setCarbs] = useState(0)
  const [fats, setFats] = useState(0)

  const handleInputChange = (event) => {
    const target = event.target;

    console.log(target.id)
  }

  return (
    <div>
      <div class="row">
        <label className="col-sm" for="name">
          Food Name
        </label>
        <label className="col-sm" for="proteins">
          Proteins
        </label>
        <label className="col-sm" for="carbs">
          Carbs
        </label>
        <label className="col-sm" for="fats">
          Fats
        </label>
      </div>

      <div class="row">
        <input
          className="col-sm input-group-text"
          id="name"
          value={name}
          onChange={handleInputChange}
        ></input>
        <input
          className="col-sm input-group-text"
          id="proteins"
          value={proteins}
          onChange={handleInputChange}
        ></input>
        <input
          className="col-sm input-group-text"
          id="carbs"
          value={carbs}
          onChange={handleInputChange}
        ></input>
        <input
          className="col-sm input-group-text"
          id="fats"
          value={fats}
          onChange={handleInputChange}
        ></input>
      </div>

      <input
        type="submit"
        onClick={() => props.addFood()}
        value="Add Food"
      ></input>
    </div>
  )
}
const mapStateToProps = state => {
  return { foodList: state.foodList }
}

export default connect(mapStateToProps, { addFood })(FoodInput)
