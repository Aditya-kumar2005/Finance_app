
import React, { useState, useEffect, useContext } from 'react';

const AuthCtx = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const login = () => {
    // In a real app, this would involve a call to an authentication service
    setUser({ name: 'Guest' });
    setIsLoginModalOpen(false); // Close the modal on login
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthCtx.Provider value={{ user, login, logout, isLoginModalOpen, setIsLoginModalOpen }}>
      {children}
    </AuthCtx.Provider>
  );
};

export const useAuth = () => useContext(AuthCtx);
