import React, { useState, useEffect } from 'react'
import SettingsPanel from '../SettingsPanel'
import WeatherDisplay from '../WeatherDisplay'
import { fetchWeatherData } from '../../api/fetchWeather' 
import './WeatherWidget.sass'

const WeatherWidget = () => {
  const [tempUnit, setTempUnit] = useState('celsius')
  const [windUnit, setWindUnit] = useState('ms')

  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const lat = 47.84
  const lon = 35.14


  const fetchWeather = async () => {
    try {
      const currentWeather = await fetchWeatherData(lat, lon)
      
      setWeatherData(currentWeather)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather()

    const intervalId = setInterval(() => {
      fetchWeather()
    }, 60000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="weather-widget">
      <SettingsPanel
        tempUnit={tempUnit}
        windUnit={windUnit}
        onTempUnitChange={setTempUnit}
        onWindUnitChange={setWindUnit}
      />
      
      {loading && (
        <div className="weather-display" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p>Завантаження даних...</p>
        </div>
      )}
      
      {error && (
        <div className="weather-display" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'red' }}>
          <p>Помилка: {error}</p>
        </div>
      )}
      
      {!loading && !error && (
        <WeatherDisplay
          weatherData={weatherData}
          tempUnit={tempUnit}
          windUnit={windUnit}
        />
      )}
    </div>
  )
}

export default WeatherWidget