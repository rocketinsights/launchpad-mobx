import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { Provider } from 'mobx-react'
import App from './components/App'
import UsersStore from './stores/UsersStore'

import './styles/index.scss'

const routes = {
  path: '/',
  component: App
}

const stores = { usersStore: new UsersStore() }

render(
  <Provider {...stores}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
