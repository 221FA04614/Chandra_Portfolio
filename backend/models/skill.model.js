import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: { type: [String], required: true },
  order: { type: Number, required: true },
}, { timestamps: true });

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;