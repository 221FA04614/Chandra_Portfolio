import React from 'react';
import './Skills.css';

export default function Skills({ skills }) {
  if (!skills || skills.length === 0) return null;

  const getSkillIcon = (category) => {
    const icons = {
      "Frontend": "🎨",
      "Backend": "⚙️",
      "Machine Learning": "🤖",
      "Databases": "🗄️",
      "Tools/Platforms": "🛠️",
      "Programming": "💻",
    };
    return icons[category] || "📚";
  };

  const getCategoryClass = (category) => {
    const classMap = {
      "Frontend": "frontend",
      "Backend": "backend",
      "Machine Learning": "machine-learning",
      "Databases": "databases",
      "Tools/Platforms": "tools-platforms",
      "Programming": "programming",
    };
    return classMap[category] || "default";
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title"><span className="gradient-text">Technical Skills</span></h2>
          <div className="section-underline"></div>
        </div>

        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div
              key={skillCategory._id}
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-card-header">
                <div className={`skill-icon-wrapper ${getCategoryClass(skillCategory.category)}`}>
                  {getSkillIcon(skillCategory.category)}
                </div>
                <h3 className="skill-category-title">
                  {skillCategory.category}
                </h3>
              </div>

              <div className="skill-items-grid">
                {skillCategory.items.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="skill-card-footer">
                <span className="skill-count">
                  {skillCategory.items.length} Skills
                </span>
                <div className={`skill-progress-bar ${getCategoryClass(skillCategory.category)}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}