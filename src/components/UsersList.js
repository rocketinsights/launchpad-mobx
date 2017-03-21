import _ from 'lodash'
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router'

@inject('usersStore')
@observer class UsersList extends Component {
  render () {
    const { usersStore } = this.props

    return (
      <ul className='users-list container'>
        {_.map(usersStore.users, (user) => {
          const key = `user-${user.id}`

          return (
            <li className='user container' key={key}>
              <Link to={`/user/${user.id}`}>
                <p className='user__name title'>{user.name}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default UsersList
