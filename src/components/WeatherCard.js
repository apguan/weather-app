import React, { Component } from 'react'
import Modal from 'react-responsive-modal'

import DetailedWeather from './DetailedWeather.js'

import { Card, CardDetail, CardContent } from './../StyledComponents.js'

export default class WeatherCard extends Component {
  state = {
    open: false
  }

  modalView = () => this.setState({ open: !this.state.open })

  displayDate = () => {
    let date = this.props.date.split('/').slice(0, 2).join('/')
    let localDate = new Date().toLocaleDateString().split('/').slice(0, 2).join('/')

    if (date === localDate) return 'Today'

    return date
  }

  getMostCommonWeatherCondition = (value) => {
    //value are the keys for the weather object.
    //can be used to get 'icons', 'main', or 'descriptions'
    let counter = this.props.conditions.reduce((acc, curr) => {
      if (curr[value] in acc) {
        acc[curr[value]]++;
      } else {
        acc[curr[value]] = 1;
      }
      return acc;
    }, {});

    let condition = Object.keys(counter).reduce((a, b) => counter[a] > counter[b] ? a : b);

    return condition;
  }

  render() {
    const { open } = this.state
    const { high, low, hourly } = this.props

    return (
      <div>
        <Modal open={open} onClose={this.modalView} center>
          <DetailedWeather hourly={hourly} />
        </Modal>

        <Card onClick={this.modalView}>
          <h3>{this.displayDate()}</h3>

          <CardContent>
            <img
              src={`http://openweathermap.org/img/w/${this.getMostCommonWeatherCondition('icon')}.png`}
              alt={this.getMostCommonWeatherCondition('description')}
            />
            <p>{this.getMostCommonWeatherCondition('description')}</p>
          </CardContent>

          <CardDetail>
            <h4>high: {high}°</h4>
            <h4>low: {low}°</h4>
          </CardDetail>
        </Card>
      </div>
    )
  }
}
