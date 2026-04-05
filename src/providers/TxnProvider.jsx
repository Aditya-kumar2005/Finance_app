import  { createContext, useContext,useEffect, useReducer } from 'react';
import { STORE_KEY } from '../components/Constant';
import { SEED } from '../components/Seed';


export const A = {LOAD:'L',ADD:'A',UPD:'U',DEL:'D',SF:'SF',CF:'CF'};
const INIT_F = {search:'',type:'all',category:'all',sort:'date-desc',dateFrom:'',dateTo:''};
function txnReducer(st,act){
    switch(act.type){
        case A.LOAD:  return {...st,txns:act.p};
        case A.ADD:   return {...st,txns:[...st.txns,act.p]};
        case A.UPD:   return {...st,txns:st.txns.map(t=>t.id===act.p.id?{...t,...act.p.d}:t)};
        case A.DEL:   return {...st,txns:st.txns.filter(t=>t.id!==act.p)};
        case A.SF:    return {...st,f:{...st.f,[act.k]:act.v}};
        case A.CF:    return {...st,f:INIT_F};
        default:      return st;
    }
}

const TxnCtx = createContext();


export { TxnCtx };


export const TxnProvider = ({ children }) => {
  const [st,disp] = useReducer(txnReducer,{txns:[],f:INIT_F});
    /* Load from localStorage */
    useEffect(()=>{
        try{const s=localStorage.getItem(STORE_KEY);const d=s?JSON.parse(s).txns:null;disp({type:A.LOAD,p:d&&d.length?d:[...SEED]});}
        catch{console.warn('Failed to load from localStorage, using seed data');disp({type:A.LOAD,p:[...SEED]});}
    },[]);
    /* Persist to localStorage */
    useEffect(()=>{if(st.txns.length)try{localStorage.setItem(STORE_KEY,JSON.stringify({txns:st.txns}))}catch{console.warn('Failed to save to localStorage');}},[st.txns]);
    return <TxnCtx.Provider value={{st,disp}}>{children}</TxnCtx.Provider>;
};
export const useTxn = () => { const c=useContext(TxnCtx); if(!c) throw new Error('No TxnCtx'); return c; };




