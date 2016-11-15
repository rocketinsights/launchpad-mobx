import _ from 'lodash'
import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer(['usersStore']) 
class UsersList extends Component {
  onUserClick (userId) {
    const { usersStore } = this.props
    usersStore.setActiveUser(userId)
  } 

  render () {
    const { usersStore } = this.props
    
    return (
      <ul className='users-list container'>
        {_.map(usersStore.users, (user) => {
          const key = `user-${user.id}`
          const onClick = this.onUserClick.bind(this, user.id)

          return (
            <li className='user container' key={key} onClick={onClick}>
              <p className='user__name title'>{user.name}</p>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default UsersList
