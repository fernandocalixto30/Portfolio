import React from 'react';
import '../styles/components/contact.sass'; // Adicione o arquivo Sass para estilos

const Contact: React.FC = () => {
  return (
    <section id="Contact-us" className="Contact-us">
      <h2 className="contact-title">
        Contato<span className="highlight"> :</span>
      </h2>

      <form
        className="Contact-us-form"
        action="https://formspree.io/f/mvgprvao"
        method="post"
      >
        <div className="form-group">
          <label htmlFor="nome" className="label">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            className="input"
          />
        </div>

        <div className="form-group flex">
          <div className="flex-item">
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="input"
            />
          </div>

          <div className="flex-item">
            <label htmlFor="telefone" className="label">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              required
              className="input"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="mensagem" className="label">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            required
            className="input"
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Enviar
          <img src="../assets/Arrow.svg" alt="Arrow" />
        </button>
      </form>
    </section>
  );
};

export default Contact;
