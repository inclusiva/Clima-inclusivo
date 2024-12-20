import React, { useState, useEffect } from "react";
import { getWeather } from '../Api/Api';

export function WeatherCard() {
    const [cities] = useState([
        "New York",
        "London",
        "Tokyo",
        "Paris",
        "São Paulo",
        "Rio de Janeiro",
        "Shanghai",
        "Mumbai",
        "Los Angeles",
        "Moscow",
        "Dubai",
        "Hong Kong",
        "Sydney",
        "Singapore",
        "Berlin",
        "Beijing",
        "Mexico City",
        "Seoul",
        "Istanbul",
        "Bangkok",
        "Buenos Aires",
    ]); // Lista de cidades exemplo

    const [weatherData, setWeatherData] = useState(null);
    const [search, setSearch] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);

    // Função para carregar os dados do clima da cidade selecionada
    useEffect(() => {
        const loadWeather = async () => {
            if (selectedCity) {
                try {
                    const data = await getWeather(selectedCity);
                    if (data) {
                        setWeatherData(data);
                    }
                } catch (error) {
                    console.error('Erro ao carregar os dados:', error);
                }
            }
        };
        loadWeather();
    }, [selectedCity]);

    // Filtra as cidades com base na busca
    const filteredCities = cities.filter(city =>
        city.toLowerCase().includes(search.toLowerCase())
    );

    // Renderiza os detalhes do clima da cidade selecionada
    const renderWeatherDetails = () => (
        weatherData && (
            <div id="weatherContainer">
                <ul>
                    <li><strong>Cidade:</strong> {weatherData.name}</li>
                    <li><strong>Temperatura:</strong> {weatherData.main.temp}°C</li>
                    <li><strong>Humidade:</strong> {weatherData.main.humidity}%</li>
                    <li><strong>Condição:</strong> {weatherData.weather[0].description}</li>
                    <li>
                        <img
                            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                            alt="Ícone do clima"
                        />
                    </li>
                </ul>
                <button onClick={() => { setSelectedCity(null); setSearch(''); }}>
                    Voltar
                </button>
            </div>
        )
    );

    return (
        <div className="App">
            <input
                type="text"
                placeholder="Buscar cidade"
                value={search}
                onChange={(e) => {
                    const searchValue = e.target.value;
                    setSearch(searchValue);
                    if (selectedCity && searchValue !== selectedCity) {
                        setSelectedCity(null);
                    }
                }}
            />
            <ul>
                {search ? (
                    filteredCities.length === 0 ? (
                        <p>Nenhuma cidade encontrada.</p>
                    ) : selectedCity ? (
                        renderWeatherDetails() // Exibe os detalhes do clima da cidade selecionada
                    ) : (
                        filteredCities.map(city => (
                            <li
                                key={city}
                                onClick={() => {
                                    setSelectedCity(city);
                                    setSearch(city);
                                }}
                            >
                                {city}
                            </li>
                        ))
                    )
                ) : null}
            </ul>
        </div>
    );
}
