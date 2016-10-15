import _ from 'lodash'
import MessagesStore from './MessagesStore'

const mockUser = {
  username: 'robertpaulson'
}

describe('# MessagesStore', () => {
  it('adds messages', () => {
    const store = new MessagesStore(mockUser)
    const testMessage = 'this is a message'
    store.addMessage(testMessage)

    const expected = _.first(store.messages)
    expect(store.messages.length).toBe(1)
    expect(expected.user.username).toBe(mockUser.username)
    expect(expected.message).toBe(testMessage)
  })
})
