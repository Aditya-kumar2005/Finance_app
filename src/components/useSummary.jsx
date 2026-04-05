import React from 'react'
import { useTxn } from './useTxn';

export default function useSummary() {
  const {st}=useTxn();
    return React.useMemo(()=>{
        const inc=st.txns.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
        const exp=st.txns.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
        return {balance:inc-exp,income:inc,expenses:exp};
    },[st.txns]);
}
