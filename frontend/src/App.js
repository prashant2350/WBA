import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ServicesList from './components/ServicesList';
import ConsultationForm from './components/ConsultationForm';
import ServiceDetails from './components/ServiceDetails';

function App() {
  const [showTopButtons, setShowTopButtons] = useState(true);
  const [isHomeModalOpen, setIsHomeModalOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowTopButtons(false);
      } else {
        setShowTopButtons(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById("home-booking-card");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const whatsappNumber = "919555455600";
  const whatsappMessage = encodeURIComponent("Hello Siddheshwar Upadhyay, I would like to request a consultation.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const emailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=solutionswba@gmail.com&su=Request for Business Consultation";
  
  // Direct links to search and display the firm on Google Maps
  const mapUrl = "https://www.google.com/maps/search/WISE+Business+Advisors+LLP+Laxmi+Nagar+Delhi"; 
  const embedMapUrl = "https://maps.google.com/maps?q=WISE%20Business%20Advisors%20LLP,%20Laxmi%20Nagar,%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <Router>
      <div className="app-container">
        
        {/* Floating Top-Right Contact Bar */}
        <div className={`top-contact-bar ${showTopButtons ? 'visible' : 'hidden'}`}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="top-btn whatsapp-btn-top">
            💬 WhatsApp
          </a>
          <a href={emailUrl} target="_blank" rel="noopener noreferrer" className="top-btn email-btn-top">
            ✉️ Email Us
          </a>
          <button onClick={scrollToBooking} className="top-btn book-btn-top">
            📅 Book Consultation
          </button>
        </div>

        <header className="app-header">
          <h1>WISE BUSINESS ADVISORS LLP</h1>
          <p>Corporate | Legal | Taxation | Compliance | IPR | Financial Advisory</p>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <ServicesList />
                
                {/* Homepage Booking Card */}
                <div id="home-booking-card" style={{ background: 'white', padding: '4rem 2rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', marginBottom: '40px', borderTop: '5px solid #1a237e', textAlign: 'center', animation: 'fadeInSlideUp 0.8s ease-out 0.4s both' }}>
                  <h2 style={{ color: '#1a237e', fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 800 }}>Ready to Get Started?</h2>
                  <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto' }}>
                    Schedule a free initial consultation with our experts to discuss your business needs, compliance requirements, and growth strategy.
                  </p>
                  <button 
                    onClick={() => setIsHomeModalOpen(true)}
                    className="book-consultation-btn"
                  >
                    Book Consultation Now
                  </button>
                </div>

                {/* Homepage Popup Modal */}
                {isHomeModalOpen && (
                  <div className="modal-overlay">
                    <div className="modal-content">
                      <button onClick={() => setIsHomeModalOpen(false)} className="modal-close-btn">✖</button>
                      <ConsultationForm />
                    </div>
                  </div>
                )}
              </>
            } />
            
            <Route path="/service/:id" element={<ServiceDetails />} />
          </Routes>
        </main>

        {/* Premium Footer Section */}
        <footer className="app-footer">
          <div className="footer-content">
            <div className="footer-address">
              <h3>Visit Our Office</h3>
              <p>
                <strong>WISE BUSINESS ADVISORS LLP</strong><br/>
                H. No. D-323/A, Pvt. Shop No. 206,<br/>
                Second Floor, Gali No. 11,<br/>
                Laxmi Nagar, East Delhi,<br/>
                Delhi - 110092, India
              </p>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="nav-btn">
                📍 Get Directions
              </a>
            </div>
            
            <div className="footer-map">
              {/* Google Maps HTML iframe Embed pointing to the official listing */}
              <iframe 
                title="Wise Business Advisors LLP Location"
                src={embedMapUrl}
                width="100%" 
                height="250" 
                style={{ border: 0, borderRadius: '12px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} WISE Business Advisors LLP. All Rights Reserved.</p>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;