import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { enter } from 'react-router-promises'
import { Provider } from 'mobx-react'
import App from './components/App'
import EditUser from './components/EditUser'
import UsersStore from './stores/UsersStore'

import './styles/index.scss'

const stores = { usersStore: new UsersStore() }

const fetchUsers = stores.usersStore.fetchUsers()
const onEnterApp = () => fetchUsers
const onEnterUser = (nextState) => {
  fetchUsers.then(() =>
    stores.usersStore.setActiveUser(nextState.params.userId)
  )
}

render(
  <Provider {...stores}>
    <Router history={browserHistory}>
      <Route path='/' component={App} onEnter={enter(onEnterApp)}>
        <Route path='/user/:userId' component={EditUser} onEnter={onEnterUser} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) module.hot.accept()
