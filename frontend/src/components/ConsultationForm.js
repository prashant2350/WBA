import React, { useState } from 'react';
import axios from 'axios';

const ConsultationForm = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceInterest: initialService,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/consultation', formData);
      alert('Consultation request sent successfully! Our team will contact you soon.');
      // Reset form, keeping the initialService if there is one
      setFormData({ name: '', phone: '', serviceInterest: initialService, message: '' });
    } catch (error) {
      alert('Error sending request. Please try again or use WhatsApp.');
    }
  };

  // WhatsApp Link Generation
  const whatsappNumber = "919555455600";
  const whatsappMessage = encodeURIComponent("Hello Siddheshwar Upadhyay, I would like to request a consultation regarding WISE Business Advisors LLP services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="contact-section">
      
      <div className="form-container">
        <h2>Request a Free Consultation</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="text" name="serviceInterest" placeholder="Service of Interest (e.g. GST, Company Law)" value={formData.serviceInterest} onChange={handleChange} required />
          <textarea name="message" placeholder="Additional Details..." value={formData.message} onChange={handleChange} />
          <button type="submit" className="submit-btn">Submit Request</button>
        </form>
      </div>

      <div className="direct-contact">
        <h3>Need immediate assistance?</h3>
        <p>Contact Firm Director <br/><strong>SIDDHESHWAR UPADHYAY</strong></p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
          💬 Message on WhatsApp
        </a>
      </div>

    </div>
  );
};

export default ConsultationForm;