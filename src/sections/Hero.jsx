import React from 'react';

export default function Hero() {
  return (
    <section id="accueil" className="section hero">
      <div className="container">
        <div className="hero-text" style={{ maxWidth: '100%' }}>
          <p className="eyebrow">Montage rythmé • storytelling visuel • formats digitaux</p>
          <h1>Monteuse et vidéaste</h1>
          <p className="hero-subtitle">
            Je transforme les images en contenus dynamiques, propres et mémorables pour les artistes, les marques, les influenceurs et les sociétés.
          </p>
          <div className="hero-actions">
            <a href="#showreel" className="btn btn-primary">Voir mon showreel</a>
            <a href="#contact" className="btn btn-outline">Me contacter</a>
          </div>
          <div className="hero-status">
            <span className="status-dot" />
            <span className="status-text">Disponible pour missions & collaborations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
