import dotenv from 'dotenv';
import connectDB from '../config/database.js';
import Profile from '../models/profile.model.js';
import Project from '../models/project.model.js';
import Skill from '../models/skill.model.js';
import Certification from '../models/certification.model.js';
import { profileData, projectsData, skillsData, certificationsData } from './data.js';

dotenv.config();

const seedDB = async () => {
  await connectDB();

  try {
    // Check if a profile already exists
    const existingProfile = await Profile.findOne();
    if (existingProfile) {
      console.log('Database already contains data. Skipping seed process.');
      process.exit();
      return;
    }

    // If no profile exists, seed the database
    console.log('Database is empty. Seeding data...');
    await Profile.create(profileData);
    await Project.insertMany(projectsData);
    await Skill.insertMany(skillsData);
    await Certification.insertMany(certificationsData);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error during database seed:', error);
  } finally {
    process.exit();
  }
};

seedDB();
