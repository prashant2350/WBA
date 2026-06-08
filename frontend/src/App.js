import React from 'react';
import ServicesList from './components/ServicesList';
import ConsultationForm from './components/ConsultationForm';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#1a237e' }}>WISE BUSINESS ADVISORS LLP</h1>
        <p>Corporate | Legal | Taxation | Compliance | IPR | Financial Advisory</p>
      </header>
      
      <main>
        <ServicesList />
        <ConsultationForm />
      </main>
    </div>
  );
}

export default App;