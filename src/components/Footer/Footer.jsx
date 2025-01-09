// src/componentes/Footer/Footer.jsx

import React from 'react';
import rodape from './rodape.png'; // Imagem do rodapé

function Footer() {
  return (
    <footer className="footer">
      <img src={rodape} alt="Imagem do Rodapé" className="footer-image" />
      <p>Criado pelas alunas da Aceleradora Inclusica 2024 - Todos os direitos reservados © 2025</p>
    </footer>
  );
}

export default Footer;
