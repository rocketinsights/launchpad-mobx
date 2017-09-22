import _ from 'lodash'
import React from 'react'
import { mount } from 'enzyme'
import Modal from './Modal'

describe('<Modal />', () => {
  let props, wrapper, modal

  beforeEach(() => {
    props = {
      active: false,
      onClose: jest.fn()
    }

    wrapper = mount(<Modal {...props} />)
    modal = wrapper.find('.modal')
  })

  it('should exist', () => {
    expect(modal.length).toBe(1)
  })

  it('should toggle the class "isActive" based on the `active` prop', () => {
    expect(modal.html().indexOf('is-active')).toBe(-1)
    _.assign(props, { active: true })
    wrapper.setProps(props)
    expect(modal.html().indexOf('is-active')).toBeGreaterThan(-1)
  })

  it('should fire onClose when the close button is clicked', () => {
    const close = modal.find('.modal-close')

    _.assign(props, { active: true })
    wrapper.setProps(props)

    expect(props.onClose.mock.calls.length).toBe(0)
    expect(modal.html().indexOf('is-active')).toBeGreaterThan(-1)

    close.simulate('click')

    expect(modal.html().indexOf('is-active')).toBe(-1)
    expect(props.onClose.mock.calls.length).toBe(1)
  })
})
