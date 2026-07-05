import React from 'react';

const projects = [
  {
    title: 'Neon Pulse',
    meta: 'Clip musical • Montage dynamique',
    image:
      'https://media.base44.com/images/public/6a456d975a34869374233045/8fc8fc72_a_generated_85aa8ee1.png',
    text:
      "Montage rythmé pour un clip à univers urbain, avec travail sur le tempo, les transitions et l'énergie visuelle.",
  },
  {
    title: 'Motion Drop',
    meta: 'Reel Instagram / TikTok',
    image:
      'https://media.base44.com/images/public/6a456d975a34869374233045/ceae1d1c4_generated_a7f9ae0b.png',
    text:
      "Montage d'un reel de danse pensé pour capter l'attention dès les premières secondes, structurer le mouvement et amplifier l'énergie du morceau.",
  },
  {
    title: 'Studio Frame',
    meta: 'Interview • Habillage sobre',
    image:
      'https://media.base44.com/images/public/6a456d975a34869374233045/f201caf47_generated_1cc30bf5.png',
    text:
      "Montage d'une interview avec coupes fluides, nettoyage du rythme et mise en valeur du discours.",
  },
  {
    title: 'Brand Vision',
    meta: 'Vidéo promotionnelle',
    image:
      'https://media.base44.com/images/public/6a456d975a34869374233045/a1742338c_generated_cdb16d74.png',
    text:
      "Vidéo promotionnelle pensée pour présenter un produit ou un service avec une image premium et moderne.",
  },
  {
    title: 'Event Echo',
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
