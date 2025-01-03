import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importando ícones
import '../styles/components/Footer.sass'; // Importando o arquivo de estilos

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Calixto_<span className="highlight">Dev</span></h2>
        </div>

        <ul className="footer-links">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>

        <div className="footer-socials">
          <a href="https://github.com/fernandocalixto30" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={24}  className='icon-github'/>
          </a>
          <a href="https://www.instagram.com/fernando_dev_junior/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={24} className='icon-instagram'/>
          </a>
          <a href="https://www.linkedin.com/in/fernando-calixto-692109246" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24}  className='icon-linkedin'/>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NandoDev. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
