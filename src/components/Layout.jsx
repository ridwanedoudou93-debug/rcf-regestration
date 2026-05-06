import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title, subtitle, onBack, showBack = false, hideFooter = false }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: 'var(--light-gray)'
    }}>
      <Header 
        title={title} 
        subtitle={subtitle} 
        onBack={onBack} 
        showBack={showBack} 
      />
      
      <main style={{ 
        flex: 1,
        padding: '1.5rem 0',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {children}
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
