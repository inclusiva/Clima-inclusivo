import './App.css';
import React, { useState, useEffect } from "react";
import { getWeather } from "./components/Api/api"; // Importa a função para pegar dados do clima
import { Header } from './components/Header/Header'; // Importando o Header


function App() {
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
        "Buenos Aires"
    ]); // Lista de cidades exemplo
    const [weatherData, setWeatherData] = useState(null);
    const [busca, setBusca] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);

    // Função para carregar os dados do clima das cidades
    useEffect(() => {
        const carregarClima = async () => {
            try {
                if (selectedCity) {
                    const data = await getWeather(selectedCity);
                    if (data) {
                        setWeatherData(data)
                    }
                }
            } catch (error) {
                console.error('Erro ao carregar os dados:', error);
            }
        };
        carregarClima();
    }, [selectedCity]);

    const cidadesFiltradas = cities.filter(city => (
        city.toLowerCase().includes(busca.toLowerCase())  // filtra com base na busca
    ));

    // renderiza os detalhes do clima da cidade
    const renderizarDetalhes = () => (
        weatherData &&  //checa se a data ja carregou
        <div id="detalhes">
            <ul>
                <li><strong>Cidade:</strong> {weatherData.name}</li>
                <li><strong>Temperatura:</strong> {weatherData.main.temp}°C</li>
                <li><strong>Humidade:</strong> {weatherData.main.humidity}%</li>
                <li><strong>Condição:</strong> {weatherData.weather[0].description}</li>
                <li><img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Ícone do clima" /></li>
                <button onClick={() => { setSelectedCity(null); setBusca(''); }}>Voltar</button> {/* remove local e volta pra lista. */}
            </ul>
        </div>
    );
    return (
        <div className="App">
            <Header />
            {/*   Input para ser trocado pelo card da andrea/yoko

            <input type="text" placeholder="Buscar cidade" value={busca} onChange={e => {
                const buscaValue = e.target.value;
                setBusca(buscaValue);
                if (selectedCity && buscaValue !== selectedCity.name) {setSelectedCity(null);}}}/> //checa se local continua sendo a busca.*/}

            <ul>
                {busca ? (
                    cidadesFiltradas.length === 0 ? (
                        <p>Nenhuma cidade encontrada.</p>
                    ) : selectedCity ? (  //checa se local foi selecionado
                        renderizarDetalhes() // exibe os detalhes da cidade selecionada
                    ) : (
                        cidadesFiltradas.map(city => (
                            <li key={city} onClick={() => { setSelectedCity(city); setBusca(city); }}>{city}</li> // seleciona a cidade e ajusta o valor de busca
                        ))
                    )
                ) : null}
            </ul>
        </div>
    );
}

export default App;
