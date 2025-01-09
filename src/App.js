// src/App.js

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import { WeatherCard } from './components/WeatherCard/WeatherCard';
import { getWeather } from './components/Api/Api';

function App() {
  const [weather, setWeather] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('pt'); // Estado para a tradução

  const handleSearch = async (city) => {
    const data = await getWeather(city);
    setWeather(data); // Atualiza o estado com os dados do clima
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Alterna entre modo claro e escuro
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header 
        toggleDarkMode={toggleDarkMode} 
        isDarkMode={isDarkMode} 
        toggleLanguage={toggleLanguage}
        language={language}
      />
      <main>
        <SearchBar onSearch={handleSearch} language={language} />
        {weather && <WeatherCard weather={weather} language={language} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
