// src/componentes/Footer/Footer.jsx

import React from 'react';
import thoughtworks from './thoughtworks_flamingo_wave.png'; // Imagem do rodapé
import Tecnopuc from './Tecnopuc.fw.png';
import PUCRS from './PUCRS.fw.png';
import Hub_Farol from './Hub_Farol.fw.png';
import Colibri from './Colibri_Logo_Preferencial_Horizontal_Positivo.png';
function Footer() {
  return (
    <footer className="footer">
      <a href="https://www.thoughtworks.com/pt-br/">
      <img src={thoughtworks} alt="Imagem do thoughtworks" className="footer-image" /></a>
      <a href="https://tecnopuc.pucrs.br//">
      <img src={Tecnopuc} alt="Imagem do Tecnopuc" className="footer-image" /></a>
      <a href="https://portal.pucrs.br//">
      <img src={PUCRS} alt="Imagem da PUCRS" className="footer-image" /></a>
      <a href="https://portal.pucrs.br//">
      <img src={Hub_Farol} alt="Imagem do Hub_Farol" className="footer-image" /></a>
      <a href="https://tix.life/tecnologia-assistiva/colibri-mouse-de-cabeca/">
      <img src={Colibri} alt="Imagem do Colibri" className="footer-image" /></a>
      
      <p>Criado pelas alunas da Aceleradora Inclusica 2024 - Todos os direitos reservados © 2025</p>
    </footer>
  );
}

export default Footer;
