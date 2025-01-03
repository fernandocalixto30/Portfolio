
import '../styles/components/header.sass'

const Header: React.FC = () => {
  return (
    <header>
        <div className="nav-bar">
        <div className="footer-logo">
          <h2>Calixto_<span className="highlight">Dev</span></h2>
        </div>
            <nav>
                <ul>
                    <li><a href="#" data-tr=" home">Home</a></li>
                    <li><a href="./sobre/index.html" data-tr="sobreMim">Sobre Mim</a></li>
                    <li><a href="#projects" data-tr="projetos">Projetos</a></li>
                    <li><a href="#contact" >Contato</a></li>
                </ul>
            </nav>

            <div className="idioma">
                <a id="pt">PT</a>
                <a id="en">EN</a>
            </div>

        </div>
    </header>
  );
};

export default Header;
