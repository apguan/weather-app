import React from 'react'
import { Line } from 'react-chartjs-2'

const DetailedWeather = ({ hourly }) => {
  let labels = []
  let temps = []
  let humidity = []

  hourly.forEach((val) => {
    labels.push(val.dt_txt.split(',')[1])
    temps.push(Math.ceil(val.main.temp))
    humidity.push(val.main.humidity)
  })

  return (
    <Line
      data={{
        labels: labels,
        datasets: [
          {
            label: 'Temperature',
            data: temps,
            backgroundColor: [
              'rgba(235, 151, 78, 0.6)'
            ],
            borderColor: [
              'rgba(235, 151, 78, 0.7)'
            ]
          },
          {
            label: 'Humidity',
            data: humidity,
            backgroundColor: [
              'rgba(129, 207, 224, 0.4)'
            ],
            borderColor: [
              'rgba(129, 207, 224, 0.7)'
            ]
          }
        ]
      }}
      options={{
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            }
          }],
          yAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            }
          }]
        }
      }}
      width={700}
      height={300}
    />
  )
}

export default DetailedWeather