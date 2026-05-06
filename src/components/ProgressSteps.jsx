import React from 'react';
import { ui } from '../data/brand';

const ProgressSteps = ({ currentStep, totalSteps }) => {
  const percentage = ((currentStep) / totalSteps) * 100;

  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '0.75rem'
      }}>
        <span style={{ 
          fontSize: '0.875rem', 
          fontWeight: '600', 
          color: 'var(--primary-blue)' 
        }}>
          {ui.stepOf(currentStep, totalSteps)}
        </span>
        <span style={{ 
          fontSize: '0.875rem', 
          fontWeight: '700', 
          color: 'var(--primary-orange)' 
        }}>
          {Math.round(percentage)}%
        </span>
      </div>
      
      <div style={{
        height: '8px',
        backgroundColor: 'var(--border)',
        borderRadius: '4px',
        overflow: 'hidden',
        width: '100%'
      }}>
        <div style={{
          height: '100%',
          backgroundColor: 'var(--primary-orange)',
          width: `${percentage}%`,
          transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          borderRadius: '4px'
        }} />
      </div>
    </div>
  );
};

export default ProgressSteps;
