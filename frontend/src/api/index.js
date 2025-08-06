import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/api/v1/portfolio' });

export const fetchProfile = () => API.get('/profile');
export const fetchProjects = () => API.get('/projects');
export const fetchSkills = () => API.get('/skills');
export const fetchCertifications = () => API.get('/certifications');