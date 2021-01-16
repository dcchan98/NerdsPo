import React from "react"
import Wrapper from "../components/Wrapper"
import FoodTable from "../components/FoodTable"
import FoodInput from "../components/FoodInput"

export default function CaloricCounter() {
  return (
    <div>
      <Wrapper>
        <br />
        <h1>Caloric Counter</h1>
        <br />

        <FoodInput />

        <br />
        <br />
        <FoodTable />
      </Wrapper>
    </div>
  )
}
