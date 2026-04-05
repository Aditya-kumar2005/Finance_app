import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastCtx = createContext();
export const useToast = () => { const c=useContext(ToastCtx); if(!c) throw new Error('No ToastCtx'); return c; };


export const ToastProvider = ({ children }) => {
  // Define toast logic here
  const [list,setList] = useState([]);
    const add = useCallback((msg,type='success')=>{
        const id=Date.now()+Math.random();
        setList(p=>[...p,{id,msg,type,out:false}]);
        setTimeout(()=>{ setList(p=>p.map(t=>t.id===id?{...t,out:true}:t)); setTimeout(()=>setList(p=>p.filter(t=>t.id!==id)),300); },3000);
    },[]);
    return <ToastCtx.Provider value={{list,add}}>{children}</ToastCtx.Provider>;
};