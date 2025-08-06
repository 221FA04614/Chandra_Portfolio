import { Router } from 'express';
import {
  getProfile,
  getProjects,
  getSkills,
  getCertifications,
} from '../controllers/portfolio.controller.js';

const router = Router();

router.route('/profile').get(getProfile);
router.route('/projects').get(getProjects);
router.route('/skills').get(getSkills);
router.route('/certifications').get(getCertifications);

export default router;