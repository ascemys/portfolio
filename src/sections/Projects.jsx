import React from 'react';

const getYouTubeId = (url) => {
  if (!url) return '';
  const match = url.match(/youtube\.com\/embed\/([^?]+)/);
  return match ? match[1] : '';
};

const getYouTubeThumb = (embedUrl) => {
  const id = getYouTubeId(embedUrl);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '';
};

const getYouTubeWatchUrl = (embedUrl) => {
  const id = getYouTubeId(embedUrl);
  return id ? `https://www.youtube.com/watch?v=${id}` : '';
};

const projects = [
  {
    title: 'Intégration UTC',
    meta: 'Aftermovie • Montage',
    image: getYouTubeThumb('https://www.youtube.com/embed/Faar9Q36_7g?si=siYzun8wJ9Wg6jGW'),
    text:
      "Aftermovie de l'intégration 2025 de l'UTC réalisé dans le cadre de l’association vidéo Sous-sol Production de l’UTC.",
    link: getYouTubeWatchUrl('https://www.youtube.com/embed/Faar9Q36_7g?si=siYzun8wJ9Wg6jGW'),
    platform: 'youtube',
  },
  {
    title: 'Clip LIFE',
    meta: 'Clip musical • DA • Montage • Tournage',
    image: getYouTubeThumb('https://www.youtube.com/embed/8IaAmdequUo?si=xb0YlSkbXF8-46zV'),
    text:
      "Clip pour l'artiste indépendant ANspac3 et l'artiste new-yorkaise Ruby Deena",
    link: getYouTubeWatchUrl('https://www.youtube.com/embed/8IaAmdequUo?si=xb0YlSkbXF8-46zV'),
    platform: 'youtube',
  },
  {
    title: 'Court métrage',
    meta: 'Scénario • Tournage • Montage',
    image: getYouTubeThumb('https://www.youtube.com/embed/NQbJzYdh1wQ?si=CN-3w2BqGIIog5ZQ'),
    text:
      "Court-métrage de sensibilisation au harcèlement sexiste et scolaire réalisé au sein de l'association égalité Homme-Femme de mon collège.",
    link: getYouTubeWatchUrl('https://www.youtube.com/embed/NQbJzYdh1wQ?si=CN-3w2BqGIIog5ZQ'),
    platform: 'youtube',
  },
  {
    title: 'Study Vlog',
    meta: 'Youtube • Montage',
    image: getYouTubeThumb('https://www.youtube.com/embed/3QmBSqRIPKQ?si=KpIFo8wbX8fR77Ho'),
    text: 'Vidéo style Study Vlog pour ma chaîne personnelle.',
    link: getYouTubeWatchUrl('https://www.youtube.com/embed/3QmBSqRIPKQ?si=KpIFo8wbX8fR77Ho'),
    platform: 'youtube',
  },
  {
    title: 'Réel Danse',
    meta: 'Format court • Danse • Tournage • Montage',
    image: 'videodanse1.jpg',
    text:
      "Vidéo d'une chorégraphie pour une danseuse/chorégraphe indépendante.",
    link: 'https://www.instagram.com/reel/DZm6m0coMfK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    platform: 'instagram',
  },
  {
    title: 'Estu Néon',
    meta: 'Aftermovie • Montage • Tournage',
    image: 'estuneon.jpg',
    text:
      "Aftermovie d'une soirée étudiante réalisé dans le cadre de l’association vidéo Sous-sol Production de l’UTC.",
    link: 'https://www.instagram.com/reel/DXFLkmgjepa/?utm_source=ig_embed&amp;utm_campaign=loading',
    platform: 'instagram',
  },
];

export default function Projects() {
  return (
    <section id="projets" className="section projects">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Projets</p>
          <h2>Travaux réalisés</h2>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <div className="project-thumb">
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ouvrir le projet ${p.title}`}
                  >
                    <img src={p.image} alt={p.title} />
                  </a>
                ) : (
                  <img src={p.image} alt={p.title} />
                )}
              </div>

              <div className="project-body">
                <h3>{p.title}</h3>
                <p className="project-meta">{p.meta}</p>
                <p>{p.text}</p>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ marginTop: 12, display: 'inline-block' }}
                  >
                    {p.platform === 'youtube' ? 'Voir sur YouTube' : 'Voir sur Instagram'}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
