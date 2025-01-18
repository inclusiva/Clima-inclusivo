// src/App.jsx

import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import { WeatherCard } from './components/WeatherCard/WeatherCard';
import './App.css'; // Importa estilos globais

function App() {
  // Estado para alternar entre 'pt' e 'en'
  const [language, setLanguage] = useState('pt');
  // Estado para o modo escuro/claro
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Estado para os dados do clima
  const [weatherData, setWeatherData] = useState(null);

  // Função para alternar o idioma
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'pt' ? 'en' : 'pt'));
  };

  // Função para alternar o tema
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Função para buscar e armazenar os dados do clima
  const handleSearch = async (city) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=221ffc853d0fe920bb3bb7b17604e522`;

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(language === 'pt' ? 'Erro ao buscar os dados do clima' : 'Error fetching weather data');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error.message);
      setWeatherData(null);
    }
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Cabeçalho */}
      <Header 
        toggleDarkMode={toggleDarkMode} 
        isDarkMode={isDarkMode} 
        toggleLanguage={toggleLanguage} 
        language={language} 
      />

      {/* Barra de Pesquisa */}
      <main>
        <SearchBar onSearch={handleSearch} language={language} />
        
        {/* Cartão de Clima */}
        {weatherData && <WeatherCard weather={weatherData} language={language} />}
      </main>

      {/* Rodapé */}
      <Footer language={language} />
    </div>
  );
}

export default App;
