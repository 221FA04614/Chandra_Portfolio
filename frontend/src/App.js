import React, { useState, useEffect } from 'react';
import './App.css';
import * as api from './api';
import { Toaster } from 'sonner';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [profileRes, projectsRes, skillsRes, certsRes] = await Promise.all([
          api.fetchProfile(),
          api.fetchProjects(),
          api.fetchSkills(),
          api.fetchCertifications(),
        ]);
        
        setProfile(profileRes.data);
        setProjects(projectsRes.data);
        setSkills(skillsRes.data);
        setCertifications(certsRes.data);

      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError("Failed to load data. Please ensure the backend server is running.");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return (
        <div className="loading-screen">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading ChandraPortfolio...</p>
        </div>
    );
  }

  if (error) {
    return <div className="error-screen">{error}</div>;
  }

  return (
    <div className="App">
      <Toaster position="top-center" richColors theme="dark" />
      <Navigation />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Certifications certifications={certifications} />
        <Contact profile={profile} />
      </main>
    </div>
  );
}

export default App;