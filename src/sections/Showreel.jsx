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
              src="https://www.instagram.com/reel/DYNRVuzN6u/embed"
              title="Captation orchestre — teaser d'événement"
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
