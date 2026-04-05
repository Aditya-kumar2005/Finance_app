import React, { useState, useEffect, useContext } from 'react';

const AuthCtx = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // For now, let's just simulate a login
  const login = () => setUser({ name: 'Guest' });
  const logout = () => setUser(null);

  return (
    <AuthCtx.Provider value={{ user, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
};

export const useAuth = () => useContext(AuthCtx);