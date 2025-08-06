import React from 'react';
import './Certifications.css';

export default function Certifications({ certifications }) {
  if (!certifications || certifications.length === 0) return null;
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title"><span className="gradient-text">Certifications & Achievements</span></h2>
          <div className="section-underline"></div>
        </div>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={cert._id} className="cert-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="cert-card-content">
                <div className="cert-icon-wrapper">
                  <svg className="cert-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <div className="cert-details">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  {cert.grade && (
                    <div className="cert-grade-wrapper">
                      <p className="cert-grade">{cert.grade}</p>
                      {cert.score && (<p className="cert-score">{cert.score}</p>)}
                    </div>
                  )}
                </div>
              </div>
              <div className="cert-card-footer">
                <span className="cert-verified-text">Verified Certification</span>
                <div className="cert-verified-pulse"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="certifications-footer">
          <div className="footer-badge">
            <svg className="footer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <span className="footer-text">Continuously Learning & Growing</span>
          </div>
        </div>
      </div>
    </section>
  );
}