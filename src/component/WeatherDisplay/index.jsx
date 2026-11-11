import React from 'react'
import { FaTemperatureHigh, FaTemperatureLow, FaArrowUp } from 'react-icons/fa'
import { getWindDirection, formatTemperature, formatWindSpeed } from '../../utils/weatherUtils' // Укажите правильный путь к утилитам
import './WeatherDisplay.sass'

const WeatherDisplay = ({ weatherData, tempUnit, windUnit }) => {
  if (!weatherData) {
    return <div className="weather-display">Завантаження...</div>
  }

  const { temperature_2m, wind_speed_10m, wind_direction_10m } = weatherData

  const isHot = temperature_2m > 0
  const TempIcon = isHot ? FaTemperatureHigh : FaTemperatureLow

  const windInfo = getWindDirection(wind_direction_10m)

  return (
    <div className="weather-display">
      <h2>Current Weather</h2>
      
      <div className="weather-data">
        <div className="data-row">
          <TempIcon size={24} />
          <span>{formatTemperature(temperature_2m, tempUnit)}</span>
        </div>

        {/* Блок ветра */}
        <div className="data-row">
          <span 
            className="wind-arrow" 
            style={{ transform: `rotate(${windInfo.iconRotation}deg)` }}
          >
            <FaArrowUp size={24} />
          </span>
          <span>{formatWindSpeed(wind_speed_10m, windUnit)}</span>
          <span className="wind-label">({windInfo.label})</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherDisplay