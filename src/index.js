import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { Router, hashHistory } from 'react-router'

import './styles/index.scss'

const routes = {
  path: '/',
  component: App
}

render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
