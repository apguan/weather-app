import React from 'react'
import { shallow } from 'enzyme'

import WeatherCard from './WeatherCard/WeatherCard.js'

it('renders correctly when there are no items', () => {
  const wrapper = shallow(<WeatherCard {props} />)
  expect(wrapper).toMatchSnapshot()

  wrapper.props.onClick();

  wrapper = component.toJSON();
  expect(wrapper).toMatchSnapshot();
})