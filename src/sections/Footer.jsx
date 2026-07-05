import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <p className="footer-brand">Ascemys Prod</p>
          <p className="footer-text">Portfolio de montage vidéo & vidéaste.</p>
        </div>
        <div className="footer-right">
          <p className="footer-meta">© {year} Ascemys — Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
