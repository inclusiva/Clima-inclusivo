import React from 'react';
import TempMax from './aquecimento-global.png';
import TempMin from './frio.png';

const WeatherCard = ({ weather, language }) => {
  if (!weather) {
    return <p>{language === 'pt' ? "Carregando..." : "Loading..."}</p>;
  }

  const cityName = weather.city.name;

  // Dias da semana em diferentes idiomas
  const daysOfWeek = {
    pt: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  };

  // Agrupando os dados para a previsão atual
  const currentWeather = weather.list[0]; // Primeiro item da lista de previsão (tempo atual)
  const currentTemps = weather.list.slice(0, 8).map(item => item.main.temp); // Previsão de 24h (8 blocos de 3h)
  const currentMax = Math.max(...currentTemps); // Temperatura máxima nas próximas 24h
  const currentMin = Math.min(...currentTemps); // Temperatura mínima nas próximas 24h

  // Agrupando os dados para os próximos dias
  const groupedForecast = weather.list.reduce((acc, item) => {
    const date = new Date(item.dt_txt);
    const day = date.toISOString().split('T')[0]; // Data no formato YYYY-MM-DD
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(item);
    return acc;
  }, {});

  const forecastDays = Object.entries(groupedForecast).slice(1, 5).map(([date, values]) => {
    const temps = values.map(v => v.main.temp);
    return {
      date,
      max: Math.max(...temps),
      min: Math.min(...temps),
      icon: values[0].weather[0].icon,
      description: values[0].weather[0].description,
    };
  });

  return (
    <div className="weather-card">
      {/* Clima Atual */}
      <div className="current-weather">
        <h2>{language === 'pt' ? `Agora em ${cityName}` : `Now in ${cityName}`}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
          alt={currentWeather.weather[0].description}
        />
        <h1 className="TempoAtual">{Math.round(currentWeather.main.temp)}°C</h1>
        <p>{language === 'pt' ? "Sensação Térmica" : "Feels Like"}: {Math.round(currentWeather.main.feels_like)}°C</p>
        <p>
          <img src={TempMax} className="termometros" alt="Ícone da temperatura máxima" />
          {language === 'pt' ? "Máxima Hoje" : "Max Today"}: {Math.round(currentMax)}°C
        </p>
        <p>
          <img src={TempMin} className="termometros" alt="Ícone da temperatura mínima" />
          {language === 'pt' ? "Mínima Hoje" : "Min Today"}: {Math.round(currentMin)}°C
        </p>
        <p>{language === 'pt' ? "Chances de chuva" : "Chance of rain"}: {currentWeather.clouds.all}%</p>
      </div>

      {/* Previsão para os Próximos Dias */}
      <div className="forecast-container">
        {forecastDays.map((day, index) => {
          const date = new Date(day.date);
          const dayName = daysOfWeek[language][date.getDay()]; // Nome do dia no idioma selecionado

          return (
            <div key={index} className="forecast-day">
              <p>{dayName}</p>
              <img
                src={`http://openweathermap.org/img/wn/${day.icon}@4x.png`}
                alt={day.description}
              />
              <p>
                <img src={TempMax} className="termometros" alt="Ícone da temperatura máxima" />
                {language === 'pt' ? "Máx" : "Max"}: {Math.round(day.max)}°C
              </p>
              <p>
                <img src={TempMin} className="termometros" alt="Ícone da temperatura mínima" />
                {language === 'pt' ? "Mín" : "Min"}: {Math.round(day.min)}°C
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { WeatherCard };
