import React from 'react';
import './SettingsPanel.sass';

const SettingsPanel = ({ tempUnit, windUnit, onTempUnitChange, onWindUnitChange }) => {
  return (
    <div className="settings-panel">
      <div className="form-group">
        <label htmlFor="wind-unit">Wind speed unit:</label>
        <select
          id="wind-unit"
          value={windUnit}
          onChange={(e) => onWindUnitChange(e.target.value)}
        >
          <option value="ms">M/s</option>
          <option value="kmh">Km/h</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="temp-unit">Temperature unit:</label>
        <select
          id="temp-unit"
          value={tempUnit}
          onChange={(e) => onTempUnitChange(e.target.value)}
        >
          <option value="celsius">°C</option>
          <option value="fahrenheit">°F</option>
        </select>
      </div>
    </div>
  );
};

export default SettingsPanel;