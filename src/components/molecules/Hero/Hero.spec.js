import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Hero from './Hero'

describe('Hero component', () => {
  it('renders correctly without issues', () => {
    const component = shallow(
      <Hero />
    )
    const result = shallowToJson(component)

    expect(result).toMatchSnapshot()
  })
})
