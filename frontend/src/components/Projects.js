import React, { useState } from 'react';
import './Projects.css';

export default function Projects({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  if (!projects || projects.length === 0) return null;

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const getCategoryClass = (category) => {
    const classMap = {
      "AI/ML": "ai-ml",
      "Full-Stack": "full-stack",
      "Backend": "backend",
    };
    return classMap[category] || "default";
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title"><span className="gradient-text">Featured Projects</span></h2>
          <div className="section-underline"></div>
        </div>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-button ${selectedCategory === category ? "active" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project._id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-card-content">
                <div className={`category-tag ${getCategoryClass(project.category)}`}>
                  {project.category}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-details-list">
                {project.details.map((detail, idx) => (
                  <div key={idx} className="project-detail-item">
                    <div className="detail-bullet"></div>
                    <p className="detail-text">{detail}</p>
                  </div>
                ))}
              </div>

              <div className="tech-tags">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-card-footer">
                <button className="view-details-button">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}