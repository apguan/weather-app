import React, { Component } from 'react'
import axios from 'axios'

import WeatherCard from './WeatherCard.js'
import ErrorBoundary from './ErrorBoundary.js'

import { SearchContainer, Input, Enter, Container, ErrorMessage } from './../StyledComponents.js'

export default class WeatherList extends Component {
	state = {
		location: '94105',
		weatherData: {},
		error: false,
		interval: null
	}

	componentDidMount() {
		this.getWeather()
		this.refreshData()
	}

	getWeather = () => {
		if (this.validateZipcode()) {
			let times = {}

			axios.get(`/data/2.5/forecast?zip=${this.state.location},us&units=imperial&APPID=d5899153c8878820e426db8eec7aff6e`)
				.then((data) => {
					let list = data.data.list

					list.forEach((val) => {
						//bucket by dates
						let localTime = new Date(val.dt_txt + 'Z').toLocaleDateString()
						let temp = Math.ceil(val.main.temp)
						val.dt_txt = new Date(val.dt_txt + 'Z').toLocaleString()

						if (!times[localTime]) {
							times[localTime] = {
								hourly: [val],
								minTemp: temp,
								maxTemp: temp,
								conditions: [val.weather[0]]
							}
						} else {
							times[localTime]['minTemp'] = Math.min(times[localTime]['minTemp'], temp)
							times[localTime]['maxTemp'] = Math.max(times[localTime]['maxTemp'], temp)
							times[localTime]['conditions'].push(val.weather[0])
							times[localTime]['hourly'].push(val)
						}
					})

					this.setState({ weatherData: times })
				}).catch((err) => {
					console.log(err)
				})
		} else {
			this.setState({ error: true })
		}
	}

	handleLocationChange = (e) => {
		e.preventDefault()
		this.setState({
			location: e.target.value,
			error: false
		})
	}

	validateZipcode = () => {
		return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.state.location)
	}

	refreshData = () => {
		this.setState({
			interval: setInterval(() => {
				this.getWeather()
			}, 300000)
		})

		console.log('refreshed!')
	}

	enterKey = (e) => {
		if (e.keyCode == 13 && e.shiftKey == false) {
			e.preventDefault()
			this.getWeather()
		}
	}

	render() {
		return (
			<div>
				<h3>5-Day Weather Forecast</h3>
				<SearchContainer>
					<Input
						onChange={this.handleLocationChange}
						placeholder='Type in your zipcode'
						value={this.state.location}
						name="zip"
						type="text"
						pattern="[0-9]*"
						onKeyDown={this.enterKey}
					/>
					<Enter onClick={this.getWeather}>Get Weather</Enter>
				</SearchContainer>
				{
					this.state.error ?
						<ErrorMessage>Please enter a valid zipcode</ErrorMessage>
						:
						null
				}

				<ErrorBoundary>
					<Container>
						{
							Object.keys(this.state.weatherData).slice(0, 5).map((data, idx) => {

								return (
									<WeatherCard
										date={data}
										high={this.state.weatherData[data].maxTemp}
										low={this.state.weatherData[data].minTemp}
										hourly={this.state.weatherData[data].hourly}
										conditions={this.state.weatherData[data].conditions}
										key={idx}
									/>
								)
							})
						}
					</Container>
				</ErrorBoundary>
			</div>
		)
	}
}
