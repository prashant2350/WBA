import React, { useState } from 'react';
import axios from 'axios';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceInterest: '',
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
      setFormData({ name: '', phone: '', serviceInterest: '', message: '' });
    } catch (error) {
      alert('Error sending request. Please try again or use WhatsApp.');
    }
  };

  // WhatsApp Link Generation
  const whatsappNumber = "919555455600";
  const whatsappMessage = encodeURIComponent("Hello Siddheshwar Upadhyay, I would like to request a consultation regarding WISE Business Advisors LLP services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="contact-section" style={{ marginTop: '40px', padding: '20px', background: '#f9f9f9' }}>
      <h2>Request a Free Initial Consultation</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', marginBottom: '20px' }}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={{ margin: '10px 0', padding: '10px' }} />
        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required style={{ margin: '10px 0', padding: '10px' }} />
        <input type="text" name="serviceInterest" placeholder="Service of Interest" value={formData.serviceInterest} onChange={handleChange} required style={{ margin: '10px 0', padding: '10px' }} />
        <textarea name="message" placeholder="Additional Details" value={formData.message} onChange={handleChange} style={{ margin: '10px 0', padding: '10px' }} />
        <button type="submit" style={{ padding: '10px', background: '#d4af37', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Submit Request</button>
      </form>

      <div className="direct-contact">
        <h3>Need immediate assistance?</h3>
        <p>Contact Firm Director <strong>SIDDHESHWAR UPADHYAY</strong> directly:</p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '10px 20px', background: '#25D366', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
          Message on WhatsApp (9555455600)
        </a>
      </div>
    </div>
  );
};

export default ConsultationForm;