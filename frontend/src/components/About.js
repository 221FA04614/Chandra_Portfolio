import React from 'react';
import './About.css'; 

export default function About({ profile }) {
  if (!profile) return null;
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title"><span className="gradient-text">About Me</span></h2>
          <div className="section-underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <div>
              <h3 className="about-greeting">Hello! I'm {profile.name.split(' ').slice(-1)[0]}</h3>
              <p className="about-bio">{profile.bio}</p>
              <p className="about-journey">Currently pursuing my Bachelor's degree in Computer Science and Engineering, I'm passionate about leveraging technology to solve real-world problems. My journey spans from building scalable web applications to developing AI-powered solutions for healthcare.</p>
            </div>
            <div className="info-grid">
              <div className="info-card"><h4 className="info-title">Location</h4><p className="info-text">{profile.location}</p></div>
              <div className="info-card"><h4 className="info-title">Email</h4><p className="info-text">{profile.email}</p></div>
            </div>
          </div>
          <div className="about-details">
            <div className="education-card">
              <h3 className="education-title">Education</h3>
              <div>
                <h4 className="education-degree">{profile.education.degree}</h4>
                <p className="education-institution">{profile.education.institution}</p>
                <p className="education-location">{profile.education.location}</p>
                <div className="education-footer">
                  <span>{profile.education.duration}</span>
                  <span className="education-cgpa">CGPA: {profile.education.cgpa}</span>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="social-link linkedin">LinkedIn</a>
              <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="social-link github">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}