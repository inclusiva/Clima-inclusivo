import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import { WeatherCard } from './components/WeatherCard/WeatherCard';
import { getWeather } from './components/Api/Api';

function App() {
  const [weather, setWeather] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para o modo escuro

  const handleSearch = async (city) => {
    const data = await getWeather(city);
    setWeather(data);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Alterna entre claro e escuro
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main>
        <SearchBar onSearch={handleSearch} />
        {weather && <WeatherCard weather={weather} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
