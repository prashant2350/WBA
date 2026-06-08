import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import ConsultationForm from './ConsultationForm';

const ServiceDetails = () => {
  // Grab the ID from the URL
  const { id } = useParams();
  
  // Find the matching service from our data
  const service = servicesData.find(s => s.id === parseInt(id));

  // If someone types a random ID in the URL
  if (!service) {
    return <div style={{ textAlign: 'center', padding: '50px' }}><h2>Service not found</h2><Link to="/">Go Back Home</Link></div>;
  }

  return (
    <div className="service-details-page" style={{ animation: 'fadeInSlideUp 0.5s ease-out' }}>
      <Link to="/" style={{ display: 'inline-block', marginBottom: '20px', color: '#1a237e', fontWeight: 'bold', textDecoration: 'none' }}>
        ← Back to All Services
      </Link>
      
      <div style={{ background: 'white', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginBottom: '40px', borderTop: '5px solid #d4af37' }}>
        <h2 style={{ color: '#1a237e', fontSize: '2.5rem', marginBottom: '1rem' }}>{service.title}</h2>
        <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem', lineHeight: '1.6' }}>{service.description}</p>
        <span className="fee-display" style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem' }}>
          Estimated Fee: {service.fee}
        </span>
      </div>

      {/* Render the form and pass the service title to pre-fill it */}
      <ConsultationForm initialService={service.title} />
    </div>
  );
};

export default ServiceDetails;