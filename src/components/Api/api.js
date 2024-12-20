

// Chave de API 
const API_KEY = '221ffc853d0fe920bb3bb7b17604e522';

// Base URL da OpenWeatherMap
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

/**
 * Função para fazer a chamada à API do OpenWeatherMap e retornar dados do clima
 * @param {string} city - Nome da cidade para a qual buscar o clima
 * @param {string} units - Unidade de medida para a temperatura (pode ser 'metric' ou 'imperial')
 * @returns {Promise<Object>} - Dados do clima
 */
export async function getWeather(city, units = 'metric') {
  const url = `${BASE_URL}?q=${city}&units=${units}&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erro ao buscar dados do clima');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro:', error);
    return null;
  }
}

/**
 * Função para formatar os dados recebidos e exibir as informações principais
 * @param {Object} data - Dados do clima
 */
export function displayWeather(data) {
  if (data && data.main) {
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const weather = data.weather[0].description;
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // URL do ícone

    // Criação do conteúdo HTML para exibir as informações
    document.getElementById('weather').innerHTML = `
      <h2>Clima em ${data.name}</h2>
      <img src="${icon}" alt="Ícone do clima">
      <div class="weather-item">
        <p><strong>Temperatura:</strong> ${temp}°C</p>
        <p><strong>Humidade:</strong> ${humidity}%</p>
        <p><strong>Condição:</strong> ${weather}</p>
      </div>
    `;
  } else {
    document.getElementById('weather').innerHTML = '<p>Dados de clima não encontrados.</p>';
  }
}
