import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { observer } from 'mobx-react'

export default observer(props => {
  const { active, children, onClose } = props
  const css = active ? 'modal is-active' : 'modal'

  return (
    <div className={css}>
      <div className='modal-background' />
      <div className='modal-content'>
        <div className='box'>{children}</div>
      </div>
      <button className='modal-close is-large' onClick={onClose}>
        <i className='fa fa-times' />
      </button>
    </div>
  )
})