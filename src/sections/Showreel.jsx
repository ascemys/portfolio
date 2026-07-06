import React from 'react';

export default function Showreel() {
  return (
    <section id="showreel" className="section showreel">
      <div className="container">
        <div className="section-header center">
          <p className="eyebrow">Showreel</p>
          <h2>CV Vidéo </h2>
          <p>
            Reprise de la DA de Hors Cadre Podcast pour présenter mon parcours et quelques projets clés.
          </p>
        </div>
        <div className="video-frame">
          <div className="video-inner">
            <iframe
              src="https://youtu.be/2GhUCZ5YYLs"
              title="Mon showreel YouTube"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
