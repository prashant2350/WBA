import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ServicesList from './components/ServicesList';
import ConsultationForm from './components/ConsultationForm';
import ServiceDetails from './components/ServiceDetails';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>WISE BUSINESS ADVISORS LLP</h1>
          <p>Corporate | Legal | Taxation | Compliance | IPR | Financial Advisory</p>
        </header>
        
        <main>
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={
              <>
                <ServicesList />
                <ConsultationForm />
              </>
            } />
            
            {/* Individual Service Page Route */}
            <Route path="/service/:id" element={<ServiceDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;