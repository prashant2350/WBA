import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ServicesList from './components/ServicesList';
import ConsultationForm from './components/ConsultationForm';
import ServiceDetails from './components/ServiceDetails';

function App() {
  // State to track if the top buttons should be visible
  const [showTopButtons, setShowTopButtons] = useState(true);

  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      // If the user scrolls down more than 100 pixels, hide the buttons
      if (window.scrollY > 100) {
        setShowTopButtons(false);
      } else {
        setShowTopButtons(true);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // WhatsApp and Email Link Setup
  const whatsappNumber = "919555455600";
  const whatsappMessage = encodeURIComponent("Hello Siddheshwar Upadhyay, I would like to request a consultation.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  // Updated Email Link (Forces Gmail in browser)
  const emailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=solutionswba@gmail.com&su=Request for Business Consultation";

  return (
    <Router>
      <div className="app-container">
        
        {/* Floating Top-Right Contact Bar */}
        <div className={`top-contact-bar ${showTopButtons ? 'visible' : 'hidden'}`}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="top-btn whatsapp-btn-top">
            💬 WhatsApp
          </a>
          <a href={emailUrl} className="top-btn email-btn-top">
            ✉️ Email Us
          </a>
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
                <ConsultationForm />
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