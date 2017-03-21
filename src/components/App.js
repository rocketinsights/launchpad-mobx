import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router'
import DevTools from 'mobx-react-devtools'
import UsersList from '../components/UsersList'

@observer class App extends Component {
  render () {
    return (
      <div className='app container'>
        <div className='columns'>
          <div className='column is-narrow users'>
            <p className='title is-1'>Users List</p>
            <p className='subtitle'>Choose a user to work on</p>
            <UsersList />
            <div className='icon'>
              <Link to='/'>
                <i className='fa fa-home' />
              </Link>
            </div>
          </div>
          <div className='column workspace'>
            <p className='title is-1'>Workspace</p>
            <p className='subtitle'>Where the work gets done</p>

            <div className='workspace-container'>
              {this.props.children}
            </div>
          </div>
        </div>
        <DevTools />
      </div>
    )
  }
}

export default App
