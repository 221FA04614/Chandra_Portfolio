import Profile from '../models/profile.model.js';
import Project from '../models/project.model.js';
import Skill from '../models/skill.model.js';
import Certification from '../models/certification.model.js';

export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found.' });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error: error.message });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 'asc' });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error: error.message });
  }
};

export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ order: 'asc' });
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching skills', error: error.message });
  }
};

export const getCertifications = async (req, res) => {
  try {
    const certifications = await Certification.find().sort({ order: 'asc' });
    res.status(200).json(certifications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching certifications', error: error.message });
  }
};