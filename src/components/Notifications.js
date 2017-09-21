import _ from 'lodash'
import React from 'react'
import { inject, observer } from 'mobx-react'

export default inject('NotificationsStore')(observer(props => {
  const { NotificationsStore } = props
  const errors = _.map(NotificationsStore.error, (message, index) => {
    return <li key={`error-${index}`}>{message}</li>
  })

  const infos = _.map(NotificationsStore.info, (message, index) => {
    return <li key={`info-${index}`}>{message}</li>
  })

  const successes = _.map(NotificationsStore.success, (message, index) => {
    return <li key={`info-${index}`}>{message}</li>
  })

  const warnings = _.map(NotificationsStore.warn, (message, index) => {
    return <li key={`warn-${index}`}>{message}</li>
  })

  const errorsList = (
    <div className='notification error animated bounceInRight'>
      <i className='icon fa fa-exclamation' />
      <ul>{errors}</ul>
      <button onClick={() => NotificationsStore.removeAll('error')}>OK</button>
    </div>
  )

  const infoList = (
    <div className='notification info animated bounceInRight'>
      <i className='icon fa fa-info-circle' />
      <ul>{infos}</ul>
      <button onClick={() => NotificationsStore.removeAll('info')}>OK</button>
    </div>
  )

  const successList = (
    <div className='notification success animated bounceInRight'>
      <i className='icon fa fa-thumbs-up' />
      <ul>{successes}</ul>
      <button onClick={() => NotificationsStore.removeAll('success')}>OK</button>
    </div>
  )

  const warnList = (
    <div className='notification warn animated bounceInRight'>
      <i className='icon fa fa-warning' />
      <ul>{warnings}</ul>
      <button onClick={() => NotificationsStore.removeAll('warn')}>OK</button>
    </div>
  )

  return (
    <div className='notifications'>
      {!_.isEmpty(errors) && errorsList}
      {!_.isEmpty(infos) && infoList}
      {!_.isEmpty(successes) && successList}
      {!_.isEmpty(warnings) && warnList}
    </div>
  )
}))
