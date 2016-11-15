import _ from 'lodash'
import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer(['usersStore']) 
class User extends Component {
  onNameChange (event) {
    const { usersStore } = this.props
    usersStore.name = event.target.value
  }

  render () {
    const { usersStore } = this.props 
    
    return (
      <div className='user container'>
        <input type='text' onChange={this.onNameChange.bind(this)} />
      </div>
    )
  }
}

export default App
