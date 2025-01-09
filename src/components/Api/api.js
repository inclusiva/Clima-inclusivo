// src/componentes/Api/Api.js

const OPENWEATHER_KEY = '221ffc853d0fe920bb3bb7b17604e522'; 
const GEOAPIFY_KEY = 'cf24f5b40b3a446292b21dbdac1b3014';

const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export async function getWeather(city, units = 'metric') {
  const url = `${BASE_WEATHER_URL}?q=${encodeURIComponent(city)}&units=${units}&appid=${OPENWEATHER_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados do clima para ${city}.`);
    }
    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    return null;
  }
}

export async function fetchCitySuggestions(query) {
  const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(query)}&apiKey=${GEOAPIFY_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.features) {
      return data.features.map((feature) => ({
        city: feature.properties.city || feature.properties.town || feature.properties.village || feature.properties.county || '',
        state: feature.properties.state || '',
        country: feature.properties.country || ''
      }));
    }
    return [];
  } catch (error) {
    console.error('Erro ao buscar sugestões:', error);
    return [];
  }
}
