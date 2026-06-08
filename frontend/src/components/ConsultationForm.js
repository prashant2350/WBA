import React, { useState } from 'react';
import axios from 'axios';
import { servicesData } from '../data/servicesData'; // Import the data for the dropdown

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
      await axios.post('https://wise-backend-aboc.onrender.com/api/consultation', formData);
      alert('Consultation request saved successfully! Our team will contact you soon.');
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
          
          {/* UPDATED: Dropdown Menu for Services */}
          <select 
            name="serviceInterest" 
            value={formData.serviceInterest} 
            onChange={handleChange} 
            required
            style={{ 
              width: '100%', padding: '1rem', marginBottom: '1.2rem', 
              border: '2px solid #eee', borderRadius: '8px', 
              fontSize: '1rem', fontFamily: 'inherit', backgroundColor: 'white',
              cursor: 'pointer'
            }}
          >
            <option value="" disabled>Select a Service</option>
            {servicesData.map((service) => (
              <option key={service.id} value={service.title}>{service.title}</option>
            ))}
            <option value="Other">Other / General Inquiry</option>
          </select>

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