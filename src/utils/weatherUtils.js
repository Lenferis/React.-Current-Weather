import { FaArrowUp } from 'react-icons/fa';

export const getWindDirection = (degrees) => {
  if (degrees >= 315 || degrees < 45) {
    return { label: 'Пн', iconRotation: 180 };
  } else if (degrees >= 45 && degrees < 135) {
    return { label: 'Сх', iconRotation: 270 };
  } else if (degrees >= 135 && degrees < 225) {
    return { label: 'Пд', iconRotation: 0 };
  } else if (degrees >= 225 && degrees < 315) {
    return { label: 'Зх', iconRotation: 90 };
  }
  return { label: 'Невідомо', iconRotation: 0 };
};

export const formatTemperature = (tempCelsius, unit) => {
  if (unit === 'fahrenheit') {
    return `${((tempCelsius * 9) / 5 + 32).toFixed(1)} °F`;
  }
  return `${tempCelsius.toFixed(1)} °C`;
};

export const formatWindSpeed = (speedMs, unit) => {
  if (unit === 'kmh') {
    return `${(speedMs * 3.6).toFixed(1)} Km/h`;
  }
  return `${speedMs.toFixed(1)} M/s`;
};