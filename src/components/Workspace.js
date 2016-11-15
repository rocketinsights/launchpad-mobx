import _ from 'lodash'
import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer(['usersStore']) 
class Workspace extends Component {
  onNameChange (event) {
    const { usersStore } = this.props
    const name = event.target.value
    usersStore.active.name = name
  }

  getRolesButtons () {
    const { usersStore } = this.props
    const buttons = _.map(usersStore.roles, (role) => {
      let css = 'button'
      if (usersStore.active.role === role) css += ' is-primary is-active'
      const setRole = usersStore.setRole.bind(usersStore, role)

      return (
        <a className={css} key={role} onClick={setRole}>
          <span>{role}</span>
        </a>
      )
    })

    return (
      <p className="control has-addons">
        {buttons}
      </p>
    )
  }

  render () { 
    const { usersStore } = this.props 
    if (!usersStore.active.id) return null 
    
    const inputProps = {
      type: 'text', 
      value: usersStore.active.name,
      onChange: this.onNameChange.bind(this)
    } 

    return (
      <div className='workspace-container'>
        <div className='box'>
          <p className='title is-4'>Change Name</p>
          <input {...inputProps} />
        </div>
        <div className='box'>
          <p className='title is-4'>Change Role</p>
          {this.getRolesButtons()}
        </div>
      </div>
    )
  }
}

export default Workspace
