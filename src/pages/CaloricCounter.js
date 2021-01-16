import React from "react"
import Wrapper from "../components/Wrapper"
import FoodTable from "../components/FoodTable"

export default function CaloricCounter() {
  return (
    <div>
      <Wrapper>
        <br />
        <h1>Caloric Counter</h1>
        <br />

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
          <input className="col-sm input-group-text" id="name"></input>
          <input className="col-sm input-group-text" id="proteins"></input>
          <input className="col-sm input-group-text" id="carbs"></input>
          <input className="col-sm input-group-text" id="fats"></input>
        </div>

        <input type="submit" value="Add Food"></input>

        <br />
        <br />
        <FoodTable />
      </Wrapper>
    </div>
  )
}
