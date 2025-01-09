// src/componentes/WeatherCard/WeatherCard.jsx

import React from 'react';

const WeatherCard = ({ weather, language }) => {
  if (!weather) {
    return <p>{language === 'pt' ? "Carregando..." : "Loading..."}</p>;
  }

  const currentWeather = weather.list[0]; // Primeiro item da lista de previsão
  const cityName = weather.city.name;

  // Lista de previsão para os próximos 4 dias (usando intervalos de 8 em 8 para pegar diariamente ao meio-dia)
  const forecastDays = weather.list.filter(item => item.dt_txt.includes("12:00:00")).slice(1, 5);

  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  return (
    <div className="weather-card">
      {/* Clima Atual */}
      <div className="current-weather">
        <h2>{language === 'pt' ? `Agora em ${cityName}` : `Now in ${cityName}`}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
          alt={currentWeather.weather[0].description}
        />
        <p>{language === 'pt' ? "Temperatura" : "Temperature"}: {Math.round(currentWeather.main.temp)}°C</p>
        <p>{language === 'pt' ? "Sensação Térmica" : "Feels Like"}: {Math.round(currentWeather.main.feels_like)}°C</p>
        <p>{language === 'pt' ? "Máxima" : "Max"}: {Math.round(currentWeather.main.temp_max)}°C</p>
        <p>{language === 'pt' ? "Mínima" : "Min"}: {Math.round(currentWeather.main.temp_min)}°C</p>
        <p>{language === 'pt' ? "Chances de chuva" : "Chance of rain"}: {currentWeather.clouds.all}%</p>
      </div>

      {/* Previsão para os Próximos Dias */}
      <div className="forecast-container">
        {forecastDays.map((day, index) => {
          const date = new Date(day.dt_txt);
          const dayName = daysOfWeek[date.getDay()];

          return (
            <div key={index} className="forecast-day">
              <p>{dayName}</p>
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />
              <p>{language === 'pt' ? "Máx" : "Max"}: {Math.round(day.main.temp_max)}°C</p>
              <p>{language === 'pt' ? "Mín" : "Min"}: {Math.round(day.main.temp_min)}°C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { WeatherCard };
