import React from 'react';

export default function Method() {
  return (
    <section id="methode" className="section method">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Méthode</p>
          <h2>Comment j’accompagne un projet</h2>
          <p>
            De l’idée initiale au rendu final, chaque étape est pensée pour construire un projet cohérent, lisible et
            aligné avec vos objectifs.
          </p>
        </div>
        <div className="method-grid">
          <article className="method-card">
            <p className="method-step">01</p>
            <h3>Direction artistique</h3>
            <p>
              Chaque projet commence par une phase de réflexion pour définir l’univers visuel, le ton, les références
              et l’intention globale. Cette étape permet d’aligner la création avec votre image, votre message et vos
              objectifs.
            </p>
          </article>
          <article className="method-card">
            <p className="method-step">02</p>
            <h3>Tournage</h3>
            <p>
              Une fois la direction validée, le tournage est pensé pour capter les images les plus justes, les plus
              fortes et les plus utiles au montage final. L’objectif est de produire une matière visuelle cohérente,
              propre et exploitable dans les meilleures conditions.
            </p>
          </article>
          <article className="method-card">
            <p className="method-step">03</p>
            <h3>Montage</h3>
            <p>
              Le montage donne sa forme finale au projet en travaillant le rythme, la narration, les transitions et
              l’impact visuel. Chaque vidéo est assemblée pour transmettre clairement votre intention et créer un rendu
              fluide, dynamique et mémorable.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
