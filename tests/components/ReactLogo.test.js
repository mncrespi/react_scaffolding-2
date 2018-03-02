import React from 'react'
import { configure, shallow, } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ReactLogo from '../../app/views/components/ReactLogo'

configure({ adapter: new Adapter(), })

describe('ReactLogo Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ReactLogo />)
  })

  it('should exist', () => {
    expect(wrapper)
        .toBeTruthy()
  })

  it('should have one heading', () => {
    expect(wrapper.find('#heading')
        .type())
        .toEqual('h2')
  })
})
