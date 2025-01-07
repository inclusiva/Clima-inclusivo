import React from 'react';
//import './WeatherCard.css'; // Certifique-se de que este arquivo esteja ausente ou integrado no App.css

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return <p>Carregando...</p>;
  }

  // Lista dos dias da semana
  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  // Obter o dia atual e os próximos 4 dias
  const today = new Date();
  const currentDayIndex = today.getDay();
  const nextDays = Array.from({ length: 4 }, (_, i) => {
    const index = (currentDayIndex + i + 1) % 7;
    return daysOfWeek[index];
  });

  // Renderização do clima atual
  const currentWeather = (
    <div className="current-weather">
      <h2>{weather.name}</h2>
      <p>{Math.round(weather.main.temp)}°C</p>
      <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
      <p>Máxima: {Math.round(weather.main.temp_max)}°C</p>
      <p>Mínima: {Math.round(weather.main.temp_min)}°C</p>
      <p>Chances de chuva: {weather.clouds.all}%</p>
    </div>
  );

  // Renderização do clima para os próximos dias
  const forecastWeather = nextDays.map((day, index) => (
    <div key={index} className="forecast-day">
      <p>{day}</p>
      {/* Exemplo: Ajuste isso com base na API completa */}
      <p>Máx: {Math.round(weather.main.temp_max)}°C</p>
      <p>Mín: {Math.round(weather.main.temp_min)}°C</p>
      {/* Simboliza diferentes condições climáticas */}
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
    </div>
  ));

  return (
    <div className="weather-card">
      {currentWeather}
      <div className="forecast">{forecastWeather}</div>
    </div>
  );
};

export { WeatherCard };

