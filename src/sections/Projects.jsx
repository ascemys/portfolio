import React from 'react';

const projects = [
  {
    title: 'Intégration UTC',
    meta: 'Aftermovie • Montage • Tournage',
    image:
      'https://media.base44.com/images/public/6a456d975a34869374233045/8fc8fc72_a_generated_85aa8ee1.png',
    text:
      "Aftermovie d'une soirée étudiante réalisé dans le cadre de l’association vidéo Sous-sol Production de l’UTC.",
    // URL d'embed YouTube ou autre (ex. YouTube no-cookie)
    embedUrl: 'https://www.youtube.com/embed/Faar9Q36_7g?si=siYzun8wJ9Wg6jGW',
  },
  {
    title: 'Clip LIFE',
    meta: 'Clip musical • DA • Montage • Tournage',
    image:
      'https://media.base44.com/images/public/6a456d975a34869374233045/ceae1d1c4_generated_a7f9ae0b.png',
    text:
      "Clip pour l'artiste indépendant ANspac3 et l'artiste new-yorkaise Ruby Deena",
    embedUrl: 'https://www.youtube.com/embed/8IaAmdequUo?si=xb0YlSkbXF8-46zV',
  },
  {
    title: 'Court métrage',
    meta: 'Scénario • Tournage • Montage',
    image:
      'https://media.base44.com/images/public/6a456d975a34869374233045/f201caf47_generated_1cc30bf5.png',
    text:
      "Court-métrage de sensibilisation au harcèlement sexiste et scolaire réalisé au sein de l'association égalité Homme-Femme de mon collège.",
    embedUrl: 'https://www.youtube.com/embed/NQbJzYdh1wQ?si=CN-3w2BqGIIog5ZQ',
  },
  {
    title: 'Study Vlog',
    meta: 'Youtube • Montage ',
    image:
      'https://media.base44.com/images/public/6a456d975a34869374233045/a1742338c_generated_cdb16d74.png',
    text:
      "Vidéo style Study Vlog pour ma chaîne personnelle.",
    embedUrl: 'https://www.youtube.com/embed/3QmBSqRIPKQ?si=KpIFo8wbX8fR77Ho',
  },
  {
    title: 'Event Echo',
    meta: 'Aftermovie • Événement',
    image:
      'https://media.base44.com/images/public/6a456d975a34869374233045/47c9f622d_generated_5ee63994.png',
    text:
      "Résumé dynamique d'un événement avec montée en intensité et mise en valeur de l'ambiance.",
    embedUrl: '',
  },
  {
    title: 'Focus Format',
    meta: 'Contenu YouTube long format',
    image:
      'https://media.base44.com/images/public/6a456d975a34869374233045/0d12f48d9_generated_ab215dda.png',
    text:
      "Montage long format avec attention portée à la clarté, au confort de visionnage et à la narration.",
    embedUrl: '',
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
              <div className="project-thumb">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p className="project-meta">{p.meta}</p>
                <p>{p.text}</p>

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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}    title: 'Event Echo',
    meta: 'Aftermovie • Événement',
    image:
      'https://media.base44.com/images/public/6a456d975a34869374233045/47c9f622d_generated_5ee63994.png',
    text:
      "Résumé dynamique d'un événement avec montée en intensité et mise en valeur de l'ambiance.",
  },
  {
    title: 'Focus Format',
    meta: 'Contenu YouTube long format',
    image:
      'https://media.base44.com/images/public/6a456d975a34869374233045/0d12f48d9_generated_ab215dda.png',
    text:
      "Montage long format avec attention portée à la clarté, au confort de visionnage et à la narration.",
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
              <div className="project-thumb">
                <img src={p.image} alt={p.title} />
              </div>
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
