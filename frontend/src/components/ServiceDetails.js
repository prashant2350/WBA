import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import ConsultationForm from './ConsultationForm';

const ServiceDetails = () => {
  const { id } = useParams();
  // State to control if the "new window" popup is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false); 
  
  const service = servicesData.find(s => s.id === parseInt(id));

  if (!service) {
    return <div style={{ textAlign: 'center', padding: '50px' }}><h2>Service not found</h2><Link to="/">Go Back Home</Link></div>;
  }

  return (
    <div className="service-details-page" style={{ animation: 'fadeInSlideUp 0.5s ease-out' }}>
      <Link to="/" style={{ display: 'inline-block', marginBottom: '20px', color: '#1a237e', fontWeight: 'bold', textDecoration: 'none' }}>
        ← Back to All Services
      </Link>
      
      <div style={{ background: 'white', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginBottom: '40px', borderTop: '5px solid #d4af37', textAlign: 'center' }}>
        <h2 style={{ color: '#1a237e', fontSize: '2.5rem', marginBottom: '1rem' }}>{service.title}</h2>
        <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2.5rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 2.5rem' }}>{service.description}</p>
        <span className="fee-display" style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem', marginBottom: '2rem', display: 'inline-block' }}>
          Estimated Fee: {service.fee}
        </span>
        
        <br />

        {/* The Colorful Booking Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          style={{
            background: 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
            color: 'white', padding: '15px 40px', fontSize: '1.2rem',
            border: 'none', borderRadius: '50px', cursor: 'pointer',
            boxShadow: '0 10px 20px rgba(245, 87, 108, 0.3)',
            fontWeight: 'bold', display: 'inline-block', marginTop: '1rem'
          }}
        >
          Book Consultation Now
        </button>
      </div>

      {/* The Popup Modal Window (Only shows if button is clicked) */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', 
          justifyContent: 'center', alignItems: 'center', zIndex: 9999
        }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '900px', padding: '20px' }}>
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute', top: '5px', right: '25px', background: 'white',
                color: 'red', border: 'none', borderRadius: '50%', width: '40px', height: '40px',
                fontSize: '1.5rem', cursor: 'pointer', zIndex: 10000, boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
              }}
            >
              ✖
            </button>
            
            {/* The Form */}
            <ConsultationForm initialService={service.title} />
            
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;