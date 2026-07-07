import React from 'react';

export default function About() {
  return (
    <section id="a-propos" className="section about">
      <div className="container about-grid">
        <div className="about-image">
          <div className="about-image-card">
            <img
              src="logo2.jpg"
              alt="Logo Ascemys"
            />
          </div>
        </div>

        <div className="about-text">
          <p className="eyebrow">Ascemys production</p>
          <h2>À propos de moi</h2>
          <p>
            Je suis Anaïs alias Ascemys, monteuse vidéo et vidéaste. Je bénéficie de plusieurs années d'expérience
            en montage, avec un vrai goût pour le rythme, le storytelling visuel et la propreté de l'image.
            Créative et à l'écoute, je suis prête à vous accompagner dans vos projets : clips, contenus digitaux,
            interviews, vidéos promotionnelles ou formats sociaux.
          </p>

          <div className="about-highlight">
            <p className="about-highlight-title">Ce que je recherche</p>
            <p>
              Je suis actuellement à la recherche d'une alternance de 12 ou 24 mois pour mon BTS Audiovisuel option Post-Production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
