export const fetchWeatherData = async (latitude, longitude) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,wind_direction_10m`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Не вдалося завантажити дані про погоду')
  }

  const data = await response.json()
  
  return data.current
}