import React from "react"
import Nav from "react-bootstrap/Nav"

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from "../reducers"

export default function Wrapper(props) {
  return (
    <Provider store={createStore(reducers)}>
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
          <a href="dcchan98@gmail.com">dcchan98@gmail.com</a>
        </p>
      </footer>
    </Provider>
  )
}
