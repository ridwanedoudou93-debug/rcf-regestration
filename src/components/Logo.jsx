import React from 'react';
import { company } from '../data/brand';

const Logo = ({ size = 'medium', showText = true }) => {
  const sizes = {
    small: { icon: 32, text: '1rem' },
    medium: { icon: 48, text: '1.25rem' },
    large: { icon: 64, text: '1.5rem' }
  };

  const currentSize = sizes[size] || sizes.medium;

  return (
    <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <div 
        className="logo-icon"
        style={{
          width: currentSize.icon,
          height: currentSize.icon,
          backgroundColor: 'var(--primary-blue)',
          borderRadius: '25%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: currentSize.icon * 0.5,
          fontFamily: 'var(--font-latin)',
          boxShadow: 'var(--shadow)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <span style={{ position: 'relative', zIndex: 1 }}>RCF</span>
        {/* Subtle orange accent */}
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '50%',
          height: '50%',
          backgroundColor: 'var(--primary-orange)',
          borderRadius: '50%',
          opacity: 0.8
        }} />
      </div>
      
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ 
            fontWeight: '700', 
            fontSize: currentSize.text, 
            color: 'var(--primary-blue)',
            lineHeight: 1.1,
            fontFamily: 'var(--font-latin)'
          }}>
            {company.shortName}
          </span>
          <span style={{ 
            fontSize: '0.65rem', 
            color: 'var(--text-muted)',
            fontWeight: '600'
          }}>
            {company.nameAr}
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
