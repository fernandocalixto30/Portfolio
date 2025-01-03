
import './styles/main.sass';

import LandingPage from './components/ladingpage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/contact';
import Footer from './components/footer';
import Jornada from './components/jornada';
import Header from './components/Header';


const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <LandingPage />
      <About />
      <Jornada />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
