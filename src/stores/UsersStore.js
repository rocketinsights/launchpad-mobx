import { observable, action, computed } from 'mobx'
import _ from 'lodash'
import mockUsers from '../../mocks/users-mock'

export default class UsersStore {
  @observable users = []
  @observable activeUserId = ''
  default = {
    id: '',
    name: ''
  }

  static validRoles = ['free', 'premium', 'admin'] 

  constructor (users, defaultUserId) {
    if (_.isEmpty(users)) {
      // TODO this setTimeout is just a stub for now since this API call will be async
      setTimeout(function mockAsyncCall () {
        this.replaceUsers(mockUsers, defaultUserId)
      }.bind(this), 200)
    } else {
      this.replaceUsers(mockUsers, defaultUserId)
    }
  }

  @computed get roles () {
    return UsersStore.validRoles
  }

  @computed get active () {
    const found = _.find(this.users, (user) => user.id === this.activeUserId)
    return found || this.default
  }

  @computed get activeUserIndex () {
    return _.findIndex(this.users, (user) => user.id === this.active.id)
  }

  @action setActiveUser (userId) {
    const found = _.find(this.users, (user) => user.id === userId)
    if (!found) return
    this.activeUserId = found.id
    return this.active
  }

  @action replaceUsers (list, defaultUserId) {
    this.users = _.map(list, (user) => {
      // opportunity to modify user and/or make it its own store
      return user
    })

    if (defaultUserId) {
      const found = _.find(this.users, (user) => user.id === defaultUserId)
      this.activeUserId = found.id
      this.setActiveUser(defaultUserId)
    }
  }

  @action setRole (role = 'free') {
    let found = _.find(this.users, (user) => user.id === this.activeUserId)
    _.set(found, 'role', role)
  }

  @action setRoleAll (role = 'free') {
    _.forEach(this.users, (user) => {
      user.role = role
    })
  }
}
