import React from "react";
import rodapeImage from "./rodape.png"; // Substitua com o caminho correto da imagem

export function Footer() {
  return (
    <footer className="footer">
      <img
        src={rodapeImage}
        alt="Logotipo das patrocinadoras da Aceleradora Inclusiva"
        className="footer-logo"
      />
      <p>
        Contato: <a href="mailto:aceleradora@hotmail.com">aceleradora@hotmail.com</a>
      </p>
    </footer>
  );
}

export default Footer;
