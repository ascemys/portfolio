import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#accueil" className="brand">
          <img src="/logo-ascemys-prod.jpg" alt="Logo Ascemys Prod" className="brand-logo" />
          <span className="brand-text">Ascemys Prod</span>
        </a>
        <nav className="nav">
          <a href="#accueil">Accueil</a>
          <a href="#a-propos">À propos</a>
          <a href="#showreel">Showreel</a>
          <a href="#projets">Projets</a>
          <a href="#competences">Compétences</a>
          <a href="#methode">Méthode</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
