import React from 'react';

const SHOWREEL_URL = "https://youtu.be/2GhUCZ5YYLs"; 

export default function Showreel() {
  return (
    <section id="showreel" className="section showreel">
      <div className="container">
        <div className="section-header center">
          <p className="eyebrow">Showreel</p>
          <h2>CV Vidéo</h2>
          <p>
            Reprise de la DA de Hors Cadre Podcast pour présenter mon parcours et quelques projets clés.
          </p>
        </div>

        {/* MINIATURE DU SHOWREEL */}
        <div className="showreel-thumb">
          <img
            src="showreel-thumb.jpg"
            alt="Miniature du showreel CV vidéo"
          />
        </div>

        {/* VIDÉO EMBED YOUTUBE */}
        <div className="video-frame">
          <div className="video-inner">
            <iframe
              src="https://www.youtube.com/embed/2GhUCZ5YYLs"
              title="Mon showreel YouTube"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* BOUTON POUR OUVRIR LA VIDÉO EN GRAND */}
        <div style={{ marginTop: 16, textAlign: "center" }}>
          <a
            href={SHOWREEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Voir la vidéo
          </a>
        </div>
      </div>
    </section>
  );
}
