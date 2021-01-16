import React from "react"
import Nav from "react-bootstrap/Nav"

import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "../reducers"

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state")
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

const saveState = state => {
  try {
    console.log(state)
    const serializedState = JSON.stringify(state)
    localStorage.setItem("state", serializedState)
    console.log(loadState())
  } catch {
    // ignore write errors
  }
}

const persistedState = loadState()

// persisted state
const store = createStore(reducers)

store.subscribe(() => {
  saveState({
    foodList: store.getState().foodList,
  })
})

export default function Wrapper(props) {
  return (
    <Provider store={store}>
      {/* Navbar */}
      <Nav activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">NerdsPo</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/CaloricCounter">Caloric Counter</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/WorkOutLogger">Workout Logger</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/Learn">Learn</Nav.Link>
        </Nav.Item>
      </Nav>

      {props.children}

      <footer>
        <p>Made By: Sean Chan</p>
        <p>
          <a>dcchan98@gmail.com</a>
        </p>
      </footer>
    </Provider>
  )
}
