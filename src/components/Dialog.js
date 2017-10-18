import _ from 'lodash'
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { PropTypes } from 'prop-types'

@observer
export default class Dialog extends Component {
  static propTypes = {
    heading: PropTypes.string,
    subtitle: PropTypes.string,
    cancel: PropTypes.string,
    confirm: PropTypes.string,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func
  }

  static defaultProps = {
    heading: 'Are you sure?',
    subtitle: '',
    cancel: 'cancel',
    confirm: 'okay'
  }

  constructor (props) {
    super(props)
    const { onCancel, onConfirm } = props
    this.onCancel = onCancel ? onCancel : _.noop
    this.onConfirm = onConfirm ? onConfirm : _.noop
  }

  render () {
    const { heading, subtitle, cancel, confirm } = this.props

    return (
      <div className='dialog'>
        <div className='title is-4'>{heading}</div>
        <div className='subtitle is-5'>{subtitle}</div>
        <div className='buttons'>
          <span className='button cancel' onClick={this.onCancel}>{cancel}</span>
          <span className='button confirm is-primary' onClick={this.onConfirm}>{confirm}</span>
        </div>
      </div>
    )
  }
}
