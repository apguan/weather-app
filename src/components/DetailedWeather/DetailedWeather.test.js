import React from 'react'
import { shallow, mount, render } from 'enzyme';

import DetailedWeather from './DetailedWeather.js'

it('renders correctly when there are no items', () => {
  const wrapper = shallow(<DetailedWeather {props} />)
  expect(wrapper).toMatchSnapshot()
})