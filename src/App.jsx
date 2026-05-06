import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import FormPage from './pages/FormPage';
import SuccessPage from './pages/SuccessPage';
import { submitLead } from './services/submissionService';
import './styles/global.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedFormType, setSelectedFormType] = useState(null);

  const handleSelectPath = (formType) => {
    setSelectedFormType(formType);
    setCurrentPage('form');
    window.scrollTo(0, 0);
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
    setSelectedFormType(null);
    window.scrollTo(0, 0);
  };

  const handleFormSubmit = async (finalData) => {
    const result = await submitLead(finalData);
    if (result.success) {
      setCurrentPage('success');
      window.scrollTo(0, 0);
    }
    return result;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onSelectPath={handleSelectPath} />;
      
      case 'form':
        return (
          <FormPage 
            formType={selectedFormType} 
            onBack={handleBackToLanding}
            onSubmit={handleFormSubmit}
          />
        );
      
      case 'success':
        return <SuccessPage onBackHome={handleBackToLanding} />;
      
      default:
        return <LandingPage onSelectPath={handleSelectPath} />;
    }
  };

  return (
    <div className="app-root">
      {renderPage()}
    </div>
  );
}

export default App;
