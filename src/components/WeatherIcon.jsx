import React from 'react'

const WeatherIcon = ({ iconNumber, summary }) => {
  return (
    <img src={`./dist/set04/big/${iconNumber}.png`}
    alt={summary} />
  )
}

export default WeatherIcon