import React from 'react';
import { ChevronRight } from 'lucide-react';
import Logo from './Logo';

const Header = ({ title, subtitle, onBack, showBack = false }) => {
  return (
    <header style={{
      padding: '1.25rem 0',
      backgroundColor: 'var(--white)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        gap: '1rem'
      }}>
        {showBack ? (
          <button 
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--primary-blue)',
              display: 'flex',
              alignItems: 'center',
              padding: '0.5rem',
              marginRight: '-0.5rem'
            }}
          >
            <ChevronRight size={24} />
          </button>
        ) : (
          <div style={{ width: '40px' }} />
        )}

        <div style={{ textAlign: 'center', flex: 1 }}>
          {title ? (
            <>
              <h1 style={{ fontSize: '1.1rem', margin: 0 }}>{title}</h1>
              {subtitle && <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{subtitle}</p>}
            </>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Logo size="small" />
            </div>
          )}
        </div>

        <div style={{ width: '40px' }}>
          {showBack && (
            <div style={{ visibility: 'hidden' }}>
               <Logo size="small" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
