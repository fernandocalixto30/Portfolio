import '../styles/components/project.sass';

interface ProjectsProps {
  srcProjeto: string;
}

const Projects: React.FC<ProjectsProps> = ({ srcProjeto }) => {
  return (
    <section id="projects" className="projetos Efeito-Scroll-project">
      <h2>Projetos</h2>
      <div className="project-list">
        <main>
          <div className="wrapper">
            <article className="flow">
              <div className="container-projeto">
                {[...Array(3)].map((_, index) => (
                  <div className="card" tabIndex={0} key={index}>
                    <div className="box face front flow">
                      <div className="img-projeto">
                        <img
                          src={`/assets/Arctic.jpg`}
                          alt={`Project ${index + 1}`}
                        />
                        <h1>em breve</h1>
                      </div>
                    </div>
                    <div className="face back">
                      <a
                        className="btn-ver-mais"
                        href={srcProjeto}
                        target="_blank"
                        rel="noreferrer"
                      >
                        ver mais
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Projects;
