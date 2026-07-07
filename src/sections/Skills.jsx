import React from 'react';

export default function Skills() {
  return (
    <section id="competences" className="section skills">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Compétences</p>
          <h2>Savoir-faire technique et créatif</h2>
        </div>

        <div className="skills-grid">
          <div className="skills-block">
            <h3 className="skills-subtitle">Compétences créatives</h3>
            <div className="tags">
              <span>Montage vidéo</span>
              <span>Storytelling visuel</span>
              <span>Rythme &amp; pacing</span>
              <span>Color grading</span>
              <span>Sound design</span>
              <span>Sous-titrage</span>
              <span>Motion design de base</span>
              <span>Formats courts pour réseaux sociaux</span>
              <span>Interview &amp; corporate</span>
              <span>Aftermovie</span>
            </div>
          </div>

          <div className="skills-block">
            <h3 className="skills-subtitle">Outils &amp; techniques</h3>
            <div className="tags tags-alt">
              <span>Adobe Premiere Pro</span>
              <span>After Effects</span>
              <span>DaVinci Resolve</span>
              <span>Sony Vegas Pro</span>
              <span>Avid Media Composer</span>
              <span>Photoshop</span>
              <span>Sony a7iv</span>
              <span>Sony a6700</span>
              <span>Sony FX3</span>
              <span>Blackmagic 6k</span>
              <span>Lumix GH9</span>
              <span>Ronin RS 4 Pro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
