import { action, extendObservable } from 'mobx'

export default class UIStore {
  static model = {
    showModal: false
  }

  constructor () {
    this.init()
  }

  init () {
    extendObservable(this, UIStore.model)
  }
}
