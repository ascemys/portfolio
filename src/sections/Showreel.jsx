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

        <div className="video-frame">
          <div className="video-inner">
            <iframe
              src="https://www.youtube-nocookie.com/embed/2GhUCZ5YYLs"
              title="Mon showreel YouTube"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

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
