import '../styles/components/Jornada.sass';

const Jornada = () => {
  return (
    <section id="jornada" className="jornada">
      <h2>Minha Jornada</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="year">2019</div>
          <div className="content">
            <h3>apaixonado pelo mundo da eletrônica</h3>
            <p>apaixonado pelo mundo da eletrônica iniciei meus estudos em componentes e circuitos eletronicos </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="year">2020</div>
          <div className="content">
            <h3>descobrindo a Robótica</h3>
            <p>aprofunadando meus conhecimentos em eletronica descobri o mundo da robotica atravez do arduino e começei a estudar</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="year">2021</div>
          <div className="content">
            <h3>descobrundo o mundo da Programção</h3>
            <p>Comecei a trabalhar com frameworks como React, aprendendo sobre construção de interfaces e desenvolvimento de SPAs (Single Page Applications).</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="year">2022</div>
          <div className="content">
            <h3>descobrindo as areas da programação</h3>
            <p>Expandindo meus horizontes, comecei a estudar eletrônica e robótica, participando de projetos práticos e aplicando programação para automação.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="year">2023</div>
          <div className="content">
            <h3>Foco em Desenvolvimento Full Stack</h3>
            <p>Continuei meus estudos com tecnologias como Node.js, TypeScript e bancos de dados, além de aprimorar meus conhecimentos em eletrônica e robótica.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="year">2024</div>
          <div className="content">
            <h3>Profissionalização e Projetos</h3>
            <p>Atualmente, estou trabalhando em projetos profissionais, com foco em programação, eletrônica e robótica, criando soluções inovadoras para o futuro.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jornada;
