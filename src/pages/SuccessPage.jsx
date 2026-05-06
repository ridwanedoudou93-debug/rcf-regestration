import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { ui } from '../data/brand';
import { CheckCircle, Home } from 'lucide-react';

const SuccessPage = ({ onBackHome }) => {
  // Simple animation effect on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout hideFooter={true}>
      <div className="container" style={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '2rem 1.5rem'
      }}>
        <div className="card animate-fade-in" style={{ 
          textAlign: 'center', 
          width: '100%',
          padding: '3rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'rgba(22, 163, 74, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--success)',
            marginBottom: '0.5rem'
          }}>
            <CheckCircle size={48} strokeWidth={2.5} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--success)', margin: 0 }}>
              {ui.successTitle}
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-dark)', 
              lineHeight: 1.6,
              maxWidth: '400px'
            }}>
              {ui.successMessage}
            </p>
          </div>

          <div style={{ width: '100%', maxWidth: '300px', marginTop: '1rem' }}>
            <button 
              className="btn btn-primary" 
              onClick={onBackHome}
              style={{ padding: '1rem' }}
            >
              <Home size={20} />
              {ui.backToHome}
            </button>
          </div>
          
          <div style={{
            marginTop: '1.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--light-gray)',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: 'var(--primary-blue)'
          }}>
            {ui.successDone} ✨
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SuccessPage;
