import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { servicesData } from '../data/servicesData';

const ServicesList = () => {
  return (
    <div className="services-container">
      <h2>Our Professional Services</h2>
      <div className="services-grid">
        {servicesData.map(service => (
          /* Wrap the card in a Link tag pointing to /service/:id */
          <Link to={`/service/${service.id}`} key={service.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="fee-display">
                Estimated Fee: {service.fee}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;