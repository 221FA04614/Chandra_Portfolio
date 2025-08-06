import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  location: { type: String, required: true },
  cgpa: { type: String, required: true },
  duration: { type: String, required: true },
}, { _id: false });

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  linkedin: { type: String, required: true },
  github: { type: String, required: true },
  location: { type: String, required: true },
  bio: { type: String, required: true },
  education: { type: educationSchema, required: true },
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;