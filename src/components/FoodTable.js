import React from 'react'

import Table from "react-bootstrap/Table"

export default function FoodTable() {
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
            <tr>
              <td>Chicken Thigh</td>
              <td>100</td>
              <td>30</td>
              <td>10</td>
              <td>610</td>
            </tr>
          </tbody>
        </Table>
    </>
  )
}
