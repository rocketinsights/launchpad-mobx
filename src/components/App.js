import React from 'react'
import { inject, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Dialog from './Dialog'
import Modal from './Modal'
import Notifications from './Notifications'

const toInject = [
  'NotificationsStore',
  'UIStore'
]

export default inject(...toInject)(observer(props => {
  const { NotificationsStore, UIStore } = props

  const onModalClose = () => {
    UIStore.showModal = false
    NotificationsStore.addInfo('Modal closed')
  }

  const onDialogAccept = () => {
    UIStore.showModal = false
    NotificationsStore.addSuccess('Dialog thingy accepted!')
  }

  const onDialogCancel = () => {
    UIStore.showModal = false
    NotificationsStore.addWarning('Dialog thingy rejected!')
  }

  const onShowModalClick = () => {
    UIStore.showModal = true
  }

  return (
    <div className='app-container'>
      <Notifications />
      <Modal active={UIStore.showModal} onClose={onModalClose}>
        <Dialog onCancel={onDialogCancel} onConfirm={onDialogAccept} />
      </Modal>
      <button className='button' onClick={onShowModalClick}>show modal</button>
      <DevTools />
    </div>
  )
}))
