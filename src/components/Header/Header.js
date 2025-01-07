import React from 'react';
import header from './header.png'; // Imagem do cabeçalho

function Header({ toggleDarkMode, isDarkMode }) {
  return (
    <header className="header">
      <img src={header} alt="Imagem do Cabeçalho" className="header-image" />
      <button onClick={toggleDarkMode} className="theme-toggle">
        {isDarkMode ? '☀️ Claro' : '🌙 Escuro'}
      </button>
    </header>
  );
}

export default Header;
