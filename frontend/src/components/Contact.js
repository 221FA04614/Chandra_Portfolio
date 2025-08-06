import React, { useState } from 'react';
import { toast } from 'sonner';
import './Contact.css';

export default function Contact({ profile }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (!profile) return null;

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title"><span className="gradient-text">Get In Touch</span></h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-header">
              <h3 className="contact-title">Let's Connect</h3>
              <p className="contact-description">Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. Let's create something amazing together!</p>
            </div>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-wrapper email-icon"><svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                <div><h4 className="contact-item-title">Email</h4><a href={`mailto:${profile.email}`} className="contact-link email-link">{profile.email}</a></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon-wrapper phone-icon"><svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                <div><h4 className="contact-item-title">Phone</h4><a href={`tel:${profile.phone}`} className="contact-link phone-link">{profile.phone}</a></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon-wrapper linkedin-icon"><svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></div>
                <div><h4 className="contact-item-title">LinkedIn</h4><a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-link linkedin-link">Connect with me</a></div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group"><label htmlFor="name" className="form-label">Your Name</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="form-input" placeholder="Enter your name" /></div>
              <div className="form-group"><label htmlFor="email" className="form-label">Your Email</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder="Enter your email" /></div>
              <div className="form-group"><label htmlFor="message" className="form-label">Your Message</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="form-textarea" placeholder="Tell me about your project or just say hello!" /></div>
              <button type="submit" disabled={isSubmitting} className="form-submit-button">{isSubmitting ? (<div className="spinner-wrapper"><div className="spinner"></div><span>Sending...</span></div>) : ("Send Message")}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}