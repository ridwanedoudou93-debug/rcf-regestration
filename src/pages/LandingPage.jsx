import React from 'react';
import Layout from '../components/Layout';
import OptionCard from '../components/OptionCard';
import Logo from '../components/Logo';
import { formTypes } from '../data/formSchemas';
import { ui, company } from '../data/brand';

const LandingPage = ({ onSelectPath }) => {
  return (
    <Layout>
      <div className="container" style={{ textAlign: 'center', paddingTop: '1rem' }}>
        <div style={{ marginBottom: '3rem' }} className="animate-fade-in">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <Logo size="large" />
          </div>
          <h1 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
            {ui.welcomeTitle}
          </h1>
          <p style={{ 
            fontSize: '1rem', 
            color: 'var(--text-muted)', 
            marginBottom: '1rem',
            fontWeight: '500'
          }}>
            {company.tagline}
          </p>
          <div style={{
            backgroundColor: 'rgba(18, 58, 99, 0.05)',
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
            border: '1px dashed var(--border)',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--primary-blue)', fontWeight: '600' }}>
              {ui.welcomeDescription}
            </p>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '1.25rem',
          marginBottom: '3rem'
        }}>
          {formTypes.map((path) => (
            <OptionCard
              key={path.id}
              title={path.title}
              description={path.description}
              iconName={path.icon}
              onClick={() => onSelectPath(path.id)}
            />
          ))}
        </div>

        <div className="animate-fade-in" style={{ paddingBottom: '2rem' }}>
          <p style={{ 
            fontSize: '0.875rem', 
            color: 'var(--text-muted)',
            backgroundColor: 'var(--white)',
            display: 'inline-block',
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--border)'
          }}>
            ✨ {ui.landingFooterNote}
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .container {
            max-width: 1000px;
          }
          div[style*="grid-template-columns: 1fr"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}} />
    </Layout>
  );
};

export default LandingPage;
