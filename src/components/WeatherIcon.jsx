import React from 'react'

const WeatherIcon = ({ iconNumber, summary }) => {
  return (
    <img src={`./${iconNumber}.png`}
    alt={summary} />
  )
}

export default WeatherIcon