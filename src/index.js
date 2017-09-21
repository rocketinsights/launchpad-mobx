import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route } from 'react-router'
import { Provider } from 'mobx-react'
import { toJS } from 'mobx'
import App from './components/App'
import NotificationsStore from './stores/NotificationsStore'
import UIStore from './stores/UIStore'

import './styles/index.scss'

const stores = {
  NotificationsStore: new NotificationsStore(),
  UIStore: new UIStore()
}

global.browserHistory = browserHistory
global.stores = stores // so helpful for debugging
global.toJS = toJS // incredibly helpful for debugging

const fetchInitial = async (nextState, replaceState, callback) => {
  callback()
}

// forces any un-covered routes to the default route
const catchAllRedirect = () => browserHistory.push('/')

render( 
  <Provider {...stores}> 
    <Router history={browserHistory}> 
      <Route path='/' component={App} onEnter={fetchInitial} />
      <Route path='*' onEnter={catchAllRedirect} />
    </Router> 
  </Provider>, 
  document.getElementById('root') 
)
