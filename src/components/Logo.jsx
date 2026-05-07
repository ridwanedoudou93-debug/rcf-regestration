import React from 'react';
import { company } from '../data/brand';
import logoImg from '../assets/logo-rcf.png';

const Logo = ({ size = 'medium', showText = true, layout = 'horizontal' }) => {
  const sizes = {
    small: { icon: 40, text: '1.1rem', sub: '0.6rem' },
    medium: { icon: 64, text: '1.4rem', sub: '0.75rem' },
    large: { icon: 120, text: '2rem', sub: '1rem' }
  };

  const currentSize = sizes[size] || sizes.medium;
  const isVertical = layout === 'vertical';

  return (
    <div 
      className="logo-container" 
      style={{ 
        display: 'flex', 
        flexDirection: isVertical ? 'column' : 'row',
        alignItems: 'center', 
        gap: isVertical ? '1rem' : '0.875rem',
        textAlign: isVertical ? 'center' : 'right'
      }}
    >
      <img 
        src={logoImg} 
        alt={company.nameEn}
        style={{
          width: 'auto',
          height: currentSize.icon,
          maxWidth: '100%',
          objectFit: 'contain',
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.08))',
          transition: 'transform 0.3s ease'
        }}
        className="logo-image"
      />
      
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{ 
            fontWeight: '800', 
            fontSize: currentSize.text, 
            color: 'var(--primary-blue)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            fontFamily: 'var(--font-latin)'
          }}>
            {company.shortName}
          </span>
          <span style={{ 
            fontSize: currentSize.sub, 
            color: 'var(--primary-orange)',
            fontWeight: '700',
            whiteSpace: 'nowrap'
          }}>
            {company.nameAr}
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
