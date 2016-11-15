import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import UsersList from '../components/UsersList'
import Workspace from '../components/Workspace'

@observer(['usersStore']) 
class App extends Component {
  render () {
    const { usersStore } = this.props 
    
    return (
      <div className='app container'>
        <div className='columns'>
          <div className='column is-narrow users'>
            <p className='title is-1'>Users List</p>
            <p className='subtitle'>Choose a user to work on</p>
            <UsersList />
            <div className='icon'>
              <i className='fa fa-home'></i>
            </div>
          </div>
          <div className='column workspace'>
            <p className='title is-1'>Workspace</p>
            <p className='subtitle'>Where the work gets done</p>
            <Workspace />
          </div>
        </div>
        <DevTools />
      </div>
    )
  }
}

export default App
