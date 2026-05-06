import React from 'react';
import { ui } from '../data/brand';

const Footer = () => {
  return (
    <footer style={{
      padding: '2rem 1.5rem',
      textAlign: 'center',
      borderTop: '1px solid var(--border)',
      marginTop: 'auto',
      backgroundColor: 'var(--white)'
    }}>
      <p style={{
        fontSize: '0.875rem',
        color: 'var(--text-muted)',
        fontWeight: '500'
      }}>
        {ui.footerText}
      </p>
      <div style={{
        marginTop: '0.5rem',
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        opacity: 0.8
      }}>
        © {new Date().getFullYear()} El Ridwane Chaud & Froid (RCF)
      </div>
    </footer>
  );
};

export default Footer;
