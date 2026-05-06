import React from 'react';
import * as LucideIcons from 'lucide-react';

const OptionCard = ({ title, description, iconName, onClick }) => {
  const Icon = LucideIcons[iconName] || LucideIcons.HelpCircle;

  return (
    <button 
      onClick={onClick}
      className="animate-fade-in"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem 1.5rem',
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow)',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        width: '100%',
        gap: '1rem',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        e.currentTarget.style.borderColor = 'var(--primary-orange)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow)';
        e.currentTarget.style.borderColor = 'var(--border)';
      }}
    >
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '20px',
        backgroundColor: 'rgba(245, 130, 32, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--primary-orange)',
        marginBottom: '0.5rem'
      }}>
        <Icon size={32} strokeWidth={2} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{title}</h3>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          {description}
        </p>
      </div>

      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '80px',
        height: '80px',
        background: 'radial-gradient(circle at bottom right, rgba(245, 130, 32, 0.05) 0%, transparent 70%)',
        zIndex: 0
      }} />
    </button>
  );
};

export default OptionCard;
