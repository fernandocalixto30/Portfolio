
import '../styles/components/about.sass'
import { BsArrowRightShort } from "react-icons/bs";
const About: React.FC = () => {
  return (
 
    <section id="about" className="Efeito-Scroll-about">
        <div className="about-img">
       <img src="https://github.com/fernandocalixto30.png" alt="" />
          </div>
        <div className="about-content">
            <h2>Sobre Mim</h2>
            <div className="sobre">
                <p>
                    Sou um estudante do ensino médio com uma grande paixão por tecnologia, especialmente em robótica.
                    Possuo habilidades de comunicação e liderança, além de fluência em italiano. Estou sempre em busca
                    de novas oportunidades para aprender e crescer.
                </p>
                <a href="#" className="saiba-mais">Saiba mais<BsArrowRightShort className='icon-saiba-mais'/> </a>
            </div>
        </div>
    </section>
  );
};

export default About;
