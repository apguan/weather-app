import React from 'react'
import { shallow, mount, render } from 'enzyme';

import WeatherCard from './WeatherCard'
import { testData, testDate, testConditions } from '../testData'

it('renders incorrectly when there are no items', () => {
  const wrapper = shallow(<WeatherCard date={testDate} hourly={testData} conditions={testConditions} />)
  expect(wrapper).toMatchSnapshot()
})