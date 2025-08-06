import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  technologies: { type: [String], required: true },
  details: { type: [String], required: true },
  category: { type: String, required: true },
  order: { type: Number, required: true },
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;