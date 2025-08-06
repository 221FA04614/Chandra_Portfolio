import mongoose from 'mongoose';

const certificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  date: { type: String, required: true },
  grade: { type: String, required: false },
  score: { type: String, required: false },
  order: { type: Number, required: true },
}, { timestamps: true });

const Certification = mongoose.model('Certification', certificationSchema);
export default Certification;