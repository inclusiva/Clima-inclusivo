const API_KEY = '221ffc853d0fe920bb3bb7b17604e522';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function getWeather(city, units = 'metric') {
  const url = `${BASE_URL}?q=${city}&units=${units}&appid=${API_KEY}`;

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
