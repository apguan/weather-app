import React from 'react'
import { shallow, mount, render } from 'enzyme';

import DetailedWeather from './DetailedWeather.js'
import { testData } from '../testData'


it('renders correctly when there are no items', () => {
  const wrapper = shallow(<DetailedWeather hourly={testData} />)
  expect(wrapper).toMatchSnapshot()
})