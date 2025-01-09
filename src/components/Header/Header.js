// src/componentes/Header/Header.jsx

import React from 'react';
import header from './header.png'; // Imagem do cabeçalho

function Header({ toggleDarkMode, isDarkMode, toggleLanguage, language }) {
  return (
    <header className="header">
      <img src={header} alt="Imagem do Cabeçalho" className="header-image" />
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
