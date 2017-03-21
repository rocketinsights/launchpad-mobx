import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('usersStore')
@observer class User extends Component {
  onNameChange (event) {
    const { usersStore } = this.props
    usersStore.name = event.target.value
  }

  render () {
    return (
      <div className='user container'>
        <input type='text' onChange={this.onNameChange.bind(this)} />
      </div>
    )
  }
}

export default User
