import React, { createContext, useContext, useState } from 'react';
import LogoutModal from './LogoutModal';

const LogoutModalContext = createContext();

export function LogoutModalProvider({ children }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <LogoutModalContext.Provider value={{ setShowLogoutModal }}>
      {children}
      <LogoutModal 
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </LogoutModalContext.Provider>
  );
}

export function useLogoutModal() {
  const context = useContext(LogoutModalContext);
  if (!context) {
    throw new Error('useLogoutModal must be used within a LogoutModalProvider');
  }
  return context;
}
