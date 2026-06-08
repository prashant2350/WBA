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

  // Scroll function for the new button
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
          {/* Reverted to text-based header, styled by our premium CSS */}
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
                    style={{
                      background: 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
                      color: 'white', padding: '15px 40px', fontSize: '1.2rem',
                      border: 'none', borderRadius: '50px', cursor: 'pointer',
                      boxShadow: '0 10px 20px rgba(245, 87, 108, 0.3)',
                      fontWeight: 'bold', display: 'inline-block'
                    }}
                  >
                    Book Consultation Now
                  </button>
                </div>

                {/* Homepage Popup Modal */}
                {isHomeModalOpen && (
                  <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', 
                    justifyContent: 'center', alignItems: 'center', zIndex: 9999
                  }}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '900px', padding: '20px' }}>
                      <button 
                        onClick={() => setIsHomeModalOpen(false)}
                        style={{
                          position: 'absolute', top: '5px', right: '25px', background: 'white',
                          color: 'red', border: 'none', borderRadius: '50%', width: '40px', height: '40px',
                          fontSize: '1.5rem', cursor: 'pointer', zIndex: 10000, boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                        }}
                      >
                        ✖
                      </button>
                      <ConsultationForm />
                    </div>
                  </div>
                )}
              </>
            } />
            
            <Route path="/service/:id" element={<ServiceDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;