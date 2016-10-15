import { observable } from 'mobx'

class Message {
  constructor (user, message) {
    this.user = user
    this.message = message
  }
}

class MessagesStore {
  @observable messages = []

  constructor (user) {
    this.user = user
  }

  addMessage (text) {
    const message = new Message(this.user, text)
    this.messages.push(message)
  }
}

export default MessagesStore
