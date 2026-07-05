import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <div className="section-header">
            <p className="eyebrow">Contact</p>
            <h2>Parlons de votre projet</h2>
          </div>
          <p>
            Pour une collaboration, une mission freelance ou une opportunité professionnelle, vous pouvez me
            contacter directement. Je réponds dès que possible.
          </p>
          <ul className="contact-list">
            <li>
              <strong>Email :</strong>{' '}
              <a href="mailto:contact.ascemys@gmail.com">contact.ascemys@gmail.com</a>
            </li>
            <li>
              <strong>Instagram :</strong>{' '}
              <a href="https://instagram.com/ascemysprod" target="_blank" rel="noopener noreferrer">
                @ascemysprod
              </a>
            </li>
            <li>
              <strong>LinkedIn :</strong>{' '}
              <a href="https://linkedin.com/in/ascemys" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/ascemys
              </a>
            </li>
            <li>
              <strong>WhatsApp :</strong>{' '}
              <a href="https://wa.me/33666469075" target="_blank" rel="noopener noreferrer">
                +33 6 66 46 90 75
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <form>
            <label>
              Nom
              <input type="text" name="name" placeholder="Votre nom" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="votre@email.com" />
            </label>
            <label>
              Message
              <textarea name="message" rows={4} placeholder="Décrivez votre projet ou votre demande..." />
            </label>
            <button type="submit" className="btn btn-primary" disabled>
              Envoyer le message (maquette)
            </button>
            <p className="form-note">
              Ce formulaire est une maquette statique. Vous pourrez brancher un vrai envoi plus tard.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
