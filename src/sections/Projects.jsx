import React from 'react';

const projects = [
  {
    title: 'Intégration UTC',
    meta: 'Aftermovie • Montage • Tournage',
    text:
      "Aftermovie d'une soirée étudiante réalisé dans le cadre de l’association vidéo Sous-sol Production de l’UTC.",
    embedUrl: 'https://www.youtube.com/embed/Faar9Q36_7g?si=siYzun8wJ9Wg6jGW',
  },
  {
    title: 'Clip LIFE',
    meta: 'Clip musical • DA • Montage • Tournage',
    text:
      "Clip pour l'artiste indépendant ANspac3 et l'artiste new-yorkaise Ruby Deena",
    embedUrl: 'https://www.youtube.com/embed/8IaAmdequUo?si=xb0YlSkbXF8-46zV',
  },
  {
    title: 'Court métrage',
    meta: 'Scénario • Tournage • Montage',
    text:
      "Court-métrage de sensibilisation au harcèlement sexiste et scolaire réalisé au sein de l'association égalité Homme-Femme de mon collège.",
    embedUrl: 'https://www.youtube.com/embed/NQbJzYdh1wQ?si=CN-3w2BqGIIog5ZQ',
  },
  {
    title: 'Study Vlog',
    meta: 'Youtube • Montage',
    text:
      "Vidéo style Study Vlog pour ma chaîne personnelle.",
    embedUrl: 'https://www.youtube.com/embed/3QmBSqRIPKQ?si=KpIFo8wbX8fR77Ho',
  },
  {
    title: 'Event Echo',
    meta: 'Aftermovie • Événement',
    text:
      "Résumé dynamique d'un événement avec montée en intensité et mise en valeur de l'ambiance.",
    embedUrl: 'https://www.youtube.com/embed/REMPLACE_PAR_L_ID_OU_LE_LIEN_EMBED_EVENT_ECHO',
  },
  {
    title: 'Focus Format',
    meta: 'Contenu YouTube long format',
    text:
      "Montage long format avec attention portée à la clarté, au confort de visionnage et à la narration.",
    embedUrl: 'https://www.youtube.com/embed/REMPLACE_PAR_L_ID_OU_LE_LIEN_EMBED_FOCUS_FORMAT',
  },
];

export default function Projects() {
  return (
    <section id="projets" className="section projects">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Projets</p>
          <h2>Travaux sélectionnés</h2>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              {p.embedUrl && (
                <div className="project-video">
                  <iframe
                    src={p.embedUrl}
                    title={`Vidéo du projet ${p.title}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              )}

              <div className="project-body">
                <h3>{p.title}</h3>
                <p className="project-meta">{p.meta}</p>
                <p>{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
