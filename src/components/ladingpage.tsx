import "../styles/components/landing-page.sass";
import {
  FaCode,
  FaHtml5,
  FaJs,
  FaLaptopCode,
  FaNode,
  FaRaspberryPi,
  FaReact,
  FaRobot,
  FaSass,
} from "react-icons/fa";
import {
  SiArduino,
  SiProbot,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { VscCircuitBoard, VscVscode } from "react-icons/vsc";
import { FcCircuit } from "react-icons/fc";
import { PiRobotBold } from "react-icons/pi";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { GiElectricalResistance, GiVintageRobot } from "react-icons/gi";
import { GrMysql } from "react-icons/gr";
import { BiCodeBlock } from "react-icons/bi";
import { useEffect, useState } from "react";

const codeLines = [
  'const circuit = createCircuit();',
  'robot.assemble(circuit);',
  'console.log("Circuito montado!");',
  'robot.execute("programa");',
];

// Custom hook for typing effect
const useTypingEffect = (lines: string[], intervalSpeed: number = 100) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let currentText = "";

    const type = () => {
      if (lineIndex < lines.length) {
        const currentLine = lines[lineIndex];
        if (charIndex < currentLine.length) {
          currentText += currentLine[charIndex];
          setDisplayedText(currentText);
          charIndex++;
        } else {
          currentText += "\n";
          setDisplayedText(currentText);
          charIndex = 0;
          lineIndex++;
        }
      } else {
        clearInterval(timer);
      }
    };

    const timer = setInterval(type, intervalSpeed);
    return () => clearInterval(timer);
  }, [lines, intervalSpeed]);

  return displayedText;
};

const PortfolioSection: React.FC = () => {
  const displayedCode = useTypingEffect(codeLines, 100);

  return (
    <section className="container">
      <div className="content-wrapper">
        <h1>Transformando ideias em código, circuitos e máquinas.</h1>
        <p>
          Sou apaixonado por programação, robótica e eletrônica. Explore meu
          portfólio e veja como posso transformar suas ideias em projetos
          reais.
        </p>
      </div>
      <pre className="code-background" aria-label="Exemplo de código">
        {displayedCode}
      </pre>
      <div className="icons-container">
        <FaRaspberryPi className="icon" color="#C7053D" title="Raspberry Pi" />
        <SiArduino className="icon" color="#00979D" title="Arduino" />
        <VscVscode className="icon" color="#007ACC" title="VS Code" />
        <FaRobot className="icon" color="#808080" title="Robot" />
        <PiRobotBold className="icon" color="#808080" title="Robot Bold" />
        <VscCircuitBoard className="icon" color="#006400" title="Circuit Board" />
        <FcCircuit className="icon" title="Circuit" />
        <FaCode className="icon" color="#5C6BC0" title="Code" />
        <FaLaptopCode className="icon" color="#5C6BC0" title="Laptop Code" />
        <FaHtml5 className="icon" color="#E34F26" title="HTML5" />
        <IoLogoCss3 color="#1572B6" className="icon" title="CSS3" />
        <FaJs className="icon" color="#F7DF1E" title="JavaScript" />
        <SiVuedotjs className="icon" color="#42B883" title="Vue.js" />
        <SiTypescript className="icon" color="#3178C6" title="TypeScript" />
        <FaNode className="icon" color="#339933" title="Node.js" />
        <IoLogoFirebase className="icon" color="#FFCA28" title="Firebase" />
        <GiVintageRobot className="icon" color="#808080" title="Vintage Robot" />
        <SiProbot className="icon" color="#FFD700" title="Probot" />
        <FaSass className="icon" color="#CC6699" title="Sass" />
        <GrMysql className="icon" color="#00758F" title="MySQL" />
        <FaReact className="icon" color="#61DAFB" title="React" />
        <BiCodeBlock className="icon" color="#5C6BC0" title="Code Block" />
        <GiElectricalResistance className="icon" title="Electrical Resistance" />
      </div>
      
    </section>
  );
};

export default PortfolioSection;
