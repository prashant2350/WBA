import React from 'react';
import { servicesData } from '../data/servicesData';

const ServicesList = () => {
  return (
    <div className="services-container">
      <h2>Our Professional Services</h2>
      <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {servicesData.map(service => (
          <div key={service.id} className="service-card" style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="fee-display" style={{ fontWeight: 'bold', color: '#2c3e50', marginTop: '10px' }}>
              Estimated Fee: {service.fee}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;