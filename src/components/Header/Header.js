// src/componentes/Header/Header.jsx

import React from 'react';
import header from './Logo_Inclu_Horz_Cor-06-07.webp'; // Imagem do cabeçalho

function Header({ toggleDarkMode, isDarkMode, toggleLanguage, language }) {
  return (
    <header className="header">
      <img src={header} alt="Imagem do Cabeçalho" className="header-image" />
      <h1>Previsão do Tempo</h1>
      <div className="header-buttons">
        <button onClick={toggleDarkMode} className="theme-toggle">
          {isDarkMode ? '☀️ Claro' : '🌙 Escuro'}
        </button>
        <button onClick={toggleLanguage} className="language-toggle">
          {language === 'pt' ? 'EN' : 'PT'}
        </button>
      </div>
    </header>
  );
}

export default Header;
