import React from 'react';

export default function Showreel() {
  return (
    <section id="showreel" className="section showreel">
      <div className="container">
        <div className="section-header center">
          <p className="eyebrow">Showreel</p>
          <h2>Captation d'un orchestre — teaser d'événement</h2>
          <p>
            Un aperçu de mon travail de montage sur une captation orchestrale, pensée pour donner envie,
            suggérer l'énergie de l'événement et valoriser la scène.
          </p>
        </div>
        <div className="video-frame">
          <div className="video-inner">
            <iframe
              src="https://youtu.be/2GhUCZ5YYLs"
              title="CV Vidéo"
              loading="lazy"
              referrerPolicy="no-referrer"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
