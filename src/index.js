import React from 'react'
import { render } from 'react-dom'
import AppState from './AppState'
import App from './App'

const appState = new AppState()

render(
  <div>
    <App appState={appState} />
  </div>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
