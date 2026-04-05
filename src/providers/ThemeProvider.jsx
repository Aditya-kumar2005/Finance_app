import React, { useState, useEffect, useCallback, useContext } from 'react';

const ThemeCtx = React.createContext();
export const useTheme = () => { const c=useContext(ThemeCtx); if(!c) throw new Error('No ThemeCtx'); return c; };

export const ThemeProvider = ({ children }) => {
  const [dark,setDark] = useState(true);
    useEffect(()=>{ document.documentElement.classList.toggle('dark',dark); },[dark]);
    const flip = useCallback(()=>setDark(p=>!p),[]);
    return <ThemeCtx.Provider value={{dark,flip}}>{children}</ThemeCtx.Provider>;
};