import React from 'react';
import thoughtworks from './thoughtworks_flamingo_wave.png'; // Imagem do rodapé
import Tecnopuc from './Tecnopuc.fw.png';
import PUCRS from './PUCRS.fw.png';
import Hub_Farol from './Hub_Farol.fw.png';
import Colibri from './Colibri_Logo_Preferencial_Horizontal_Positivo.png';
import globo from './rede-globo-logo-4.png';


function Footer({ language }) {
  return (
    <footer className="footer">
       <a href="https://www.globo.com/" target="_blank" rel="noopener noreferrer">
        <img src={globo} alt="Imagem da globo" className="footer-image" />
      </a>
      <a href="https://www.thoughtworks.com/pt-br/" target="_blank" rel="noopener noreferrer">
        <img src={thoughtworks} alt="Imagem da thoughtworks" className="footer-image" />
      </a>
      <a href="https://tecnopuc.pucrs.br/" target="_blank" rel="noopener noreferrer">
        <img src={Tecnopuc} alt="Imagem do Tecnopuc" className="footer-image" />
      </a>
      <a href="https://portal.pucrs.br/" target="_blank" rel="noopener noreferrer">
        <img src={PUCRS} alt="Imagem da PUCRS" className="footer-image" />
      </a>
      <a href="https://tecnopuc.pucrs.br/ecossistema-tecnopuc/hubs/" target="_blank" rel="noopener noreferrer">
        <img src={Hub_Farol} alt="Imagem do Farol Social Hub " className="footer-image" />
      </a>
      <a href="https://tix.life/tecnologia-assistiva/colibri-mouse-de-cabeca/" target="_blank" rel="noopener noreferrer">
        <img src={Colibri} alt="Imagem do Colibri" className="footer-image" />
      </a>
      <p>
        {language === 'pt'
          ? 'Criado pelas alunas da Aceleradora Inclusiva 2024 - Todos os direitos reservados © 2025'
          : 'Created by the students of the Aceleradora Inclusiva 2024 - All rights reserved © 2025'}
      </p>
    </footer>
  );
}

export default Footer;
