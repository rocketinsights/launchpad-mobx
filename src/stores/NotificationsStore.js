import _ from 'lodash'
import { action, extendObservable } from 'mobx'

export default class NotificationsStore {
  static levels = ['error', 'info', 'success', 'warn']

  static model = {
    error: [],
    info: [],
    success: [],
    warn: []
  }

  constructor (state = {}) {
    extendObservable(this, NotificationsStore.model, state)
  }

  @action addError (message) { this.notify(message, 'error') }

  @action addInfo (message) { this.notify(message, 'info') }
  
  @action addSuccess (message) { this.notify(message, 'success') }

  @action addWarning (message) { this.notify(message, 'warn') }

  @action notify (message, level = 'info', autoRemove = true) {
    if (!message || !_.includes(NotificationsStore.levels, level)) return
    if (level === 'error') this.error.push(message)
    if (level === 'info') this.info.push(message)
    if (level === 'success') this.success.push(message)
    if (level === 'warn') this.warn.push(message)

    if (autoRemove) this.autoRemove(message, level)
  }

  @action autoRemove (message, level = 'info', delay = 3000) {
    setTimeout(() => {
      _.pull(this[level], message)
    }, delay)
  }

  @action removeAll (level = 'info') {
    this[level] = []
  }
}
