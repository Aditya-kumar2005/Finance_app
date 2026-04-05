import React, { useState, useContext } from 'react';

const RoleCtx = React.createContext();
export const useRole = () => { const c=useContext(RoleCtx); if(!c) throw new Error('No RoleCtx'); return c; };


// export const useRole = () => useContext(RoleContext);

export const RoleProvider = ({ children }) => {
  // Define role logic here
  const [role,setRole] = useState('admin');
    return <RoleCtx.Provider value={{role,setRole,isAdmin:role==='admin'}}>{children}</RoleCtx.Provider>;
};